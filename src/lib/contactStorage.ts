import fs from 'fs';
import path from 'path';

export interface StoredContact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: 'contact' | 'demo';
  productInterest: string;
  createdAt: string; // ISO 8601 with exact time
}

// In-memory fallback
let inMemoryContacts: StoredContact[] = [];

// Local file storage path (persists in runtime environment / local dev)
const DATA_DIR = path.join(process.cwd(), '.data');
const FILE_PATH = path.join(DATA_DIR, 'contacts.json');

function ensureFileExists() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(FILE_PATH)) {
      fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (e) {
    // Read-only filesystem handling on serverless platforms
  }
}

export function readContactsFromFile(): StoredContact[] {
  try {
    ensureFileExists();
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    // Fallback to inMemory
  }
  return inMemoryContacts;
}

export function writeContactToFile(contact: StoredContact): StoredContact[] {
  inMemoryContacts.unshift(contact);
  try {
    ensureFileExists();
    const existing = readContactsFromFile();
    const updated = [contact, ...existing.filter(c => c._id !== contact._id)];
    fs.writeFileSync(FILE_PATH, JSON.stringify(updated, null, 2), 'utf-8');
    return updated;
  } catch (e) {
    // return memory contacts
    return inMemoryContacts;
  }
}

export function deleteContactFromFile(id: string): StoredContact[] {
  inMemoryContacts = inMemoryContacts.filter(c => c._id !== id);
  try {
    const existing = readContactsFromFile();
    const updated = existing.filter(c => c._id !== id);
    fs.writeFileSync(FILE_PATH, JSON.stringify(updated, null, 2), 'utf-8');
    return updated;
  } catch (e) {
    return inMemoryContacts;
  }
}
