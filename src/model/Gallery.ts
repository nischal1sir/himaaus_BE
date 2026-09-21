import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  category: string;
  imageUrl: string;
  uploadedAt: string;
}

const GallerySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: 'General' },
    imageUrl: { type: String, required: true },
    uploadedAt: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IGallery>('Gallery', GallerySchema);
