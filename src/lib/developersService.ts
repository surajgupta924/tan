import { DEVELOPER_ROLES, DeveloperRole } from '@/data/companyData';
import { connectDB } from '@/lib/mongodb';
import mongoose, { Schema } from 'mongoose';

const DeveloperSchema = new Schema(
  {
    title: { type: String, required: true },
    experience: { type: String, required: true },
    skills: [{ type: String }],
    engagement: { type: String, default: 'Full-Time / Part-Time / Hourly' },
    availability: { type: String, default: 'Immediate (Within 48 hrs)' },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Developer = mongoose.models.Developer || mongoose.model('Developer', DeveloperSchema);

let memoryDevelopers: DeveloperRole[] = [...DEVELOPER_ROLES];

export async function getLiveDevelopers(): Promise<DeveloperRole[]> {
  try {
    await connectDB();
    let dbDevs = await Developer.find().sort({ createdAt: -1 }).lean();
    
    // Auto-seed Atlas database on first connect so you never start with empty profiles
    if (!dbDevs || dbDevs.length === 0) {
      await Developer.insertMany(DEVELOPER_ROLES);
      dbDevs = await Developer.find().sort({ createdAt: -1 }).lean();
    }

    if (dbDevs && dbDevs.length > 0) {
      return dbDevs.map((d: any) => ({
        title: d.title,
        experience: d.experience,
        skills: d.skills || [],
        engagement: d.engagement,
        availability: d.availability,
        description: d.description,
      }));
    }
  } catch (e) {}
  return memoryDevelopers;
}

export async function addLiveDeveloper(dev: DeveloperRole) {
  try {
    await connectDB();
    await Developer.create(dev);
  } catch (e) {}
  memoryDevelopers = [dev, ...memoryDevelopers];
  return memoryDevelopers;
}

export async function deleteLiveDeveloper(title: string) {
  try {
    await connectDB();
    await Developer.deleteOne({ title });
  } catch (e) {}
  memoryDevelopers = memoryDevelopers.filter(d => d.title !== title);
  return memoryDevelopers;
}
