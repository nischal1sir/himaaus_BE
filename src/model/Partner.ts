import mongoose, { Schema, Document } from 'mongoose';

export interface IPartner extends Document {
  logo: string;
  name: string;
  country: string;
  category: string;
  website: string;
  description: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
}

const PartnerSchema: Schema = new Schema(
  {
    logo: { type: String, default: '' },
    name: { type: String, required: true },
    country: { type: String, required: true },
    category: { type: String, required: true },
    website: { type: String, default: '' },
    description: { type: String, default: '' },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    createdAt: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IPartner>('Partner', PartnerSchema);
