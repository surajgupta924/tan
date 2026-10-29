import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { 
  readContactsFromFile, 
  writeContactToFile, 
  deleteContactFromFile, 
  StoredContact 
} from '@/lib/contactStorage';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type, productInterest } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone are required' },
        { status: 400 }
      );
    }

    // Exact ISO timestamp with full Indian local date & time
    const exactTimestamp = new Date().toISOString();

    const newLead: StoredContact = {
      _id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      name: name.trim(),
      email: (email || 'N/A').trim(),
      phone: phone.trim(),
      subject: (subject || 'New Website Project Inquiry').trim(),
      message: (message || (type === 'demo' ? `Demo booking request for ${productInterest || 'Enterprise Software ERP'}` : 'Project Inquiry')).trim(),
      type: type === 'demo' ? 'demo' : 'contact',
      productInterest: (productInterest || 'Enterprise Software Solution').trim(),
      createdAt: exactTimestamp,
    };

    // 1. Try saving in MongoDB Atlas (if connection string configured)
    let savedToMongo = false;
    try {
      await connectDB();
      const mongoRecord = await Contact.create({
        name: newLead.name,
        email: newLead.email,
        phone: newLead.phone,
        subject: newLead.subject,
        message: newLead.message,
        type: newLead.type,
        productInterest: newLead.productInterest,
      });
      if (mongoRecord && mongoRecord._id) {
        newLead._id = mongoRecord._id.toString();
        savedToMongo = true;
      }
    } catch (mongoErr: any) {
      console.warn("Notice: MongoDB Atlas not yet configured or connecting, using persistent fallback storage.");
    }

    // 2. ALWAYS save in persistent disk/memory storage as well
    writeContactToFile(newLead);

    return NextResponse.json({
      success: true,
      message: 'Inquiry saved successfully with exact timestamp!',
      data: newLead,
      storage: savedToMongo ? 'MongoDB Atlas' : 'Persistent Storage',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // 1. First try reading from MongoDB Atlas
    try {
      await connectDB();
      const mongoContacts = await Contact.find().sort({ createdAt: -1 }).lean();
      if (mongoContacts && mongoContacts.length > 0) {
        const formatted = mongoContacts.map((c: any) => ({
          _id: c._id.toString(),
          name: c.name,
          email: c.email || 'N/A',
          phone: c.phone,
          subject: c.subject || 'Website Inquiry',
          message: c.message,
          type: c.type || 'contact',
          productInterest: c.productInterest || 'Software ERP',
          createdAt: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
        }));
        return NextResponse.json({ success: true, data: formatted, source: 'MongoDB Atlas' });
      }
    } catch (dbError) {
      // Fall through to disk storage
    }

    // 2. Read from persistent disk storage
    const diskContacts = readContactsFromFile();
    return NextResponse.json({ 
      success: true, 
      data: diskContacts, 
      source: 'Persistent Storage' 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required' }, { status: 400 });
    }

    // Delete from MongoDB Atlas
    try {
      await connectDB();
      await Contact.findByIdAndDelete(id);
    } catch (e) {}

    // Delete from persistent disk file
    deleteContactFromFile(id);

    return NextResponse.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
