import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  link?: string;
  author: string;
  excerpt: string;
  longDescription: string;
  category: string;
  image: string;
  status: 'draft' | 'published';
  date: string;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String },
    author: { type: String, required: true, default: 'Admin' },
    excerpt: { type: String, required: true },
    longDescription: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, default: '' },
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
    date: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IBlog>('Blog', BlogSchema);
