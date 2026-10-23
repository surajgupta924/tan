import { NextResponse } from 'next/server';
import { getLiveDevelopers, addLiveDeveloper, deleteLiveDeveloper } from '@/lib/developersService';

export async function GET() {
  try {
    const devs = await getLiveDevelopers();
    return NextResponse.json({ success: true, data: devs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, experience, skills, engagement, availability, description } = body;

    if (!title || !experience) {
      return NextResponse.json({ success: false, error: 'Title and Experience are required' }, { status: 400 });
    }

    const skillList = Array.isArray(skills) 
      ? skills 
      : (typeof skills === 'string' ? skills.split(',').map((s: string) => s.trim()).filter(Boolean) : []);

    const newDev = {
      title,
      experience,
      skills: skillList.length > 0 ? skillList : ['Next.js', 'React', 'Node.js', 'TypeScript'],
      engagement: engagement || 'Full-Time / Hourly',
      availability: availability || 'Immediate (Within 48 hrs)',
      description: description || 'Senior full-stack engineer ready for deployment.',
    };

    await addLiveDeveloper(newDev);

    return NextResponse.json({ success: true, message: 'Developer role published successfully!', data: newDev });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');
    if (!title) {
      return NextResponse.json({ success: false, error: 'Title required' }, { status: 400 });
    }
    await deleteLiveDeveloper(title);
    return NextResponse.json({ success: true, message: 'Developer profile deleted' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
