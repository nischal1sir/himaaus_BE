import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'New' | 'Read' | 'Responded';
  createdAt: string;
}

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['New', 'Read', 'Responded'], default: 'New' },
    createdAt: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IContact>('Contact', ContactSchema);
