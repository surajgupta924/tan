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
    const dbPromise = (async () => {
      await connectDB();
      return await Developer.find().sort({ createdAt: -1 }).lean();
    })();

    // 500ms race timeout for ultra-fast instant rendering
    const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(null), 500));
    const result: any = await Promise.race([dbPromise, timeoutPromise]);

    if (result && Array.isArray(result) && result.length > 0) {
      return result.map((d: any) => ({
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
