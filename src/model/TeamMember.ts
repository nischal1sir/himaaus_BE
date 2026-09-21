import mongoose, { Schema, Document } from 'mongoose';

export interface ITeamMember extends Document {
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
  linkedinUrl?: string;
  imageSrc?: string;
  isActive: boolean;
}

const TeamMemberSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bio: { type: String, default: '' },
    linkedinUrl: { type: String, default: '' },
    imageSrc: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);
