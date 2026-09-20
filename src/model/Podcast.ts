import mongoose, { Schema, Document } from 'mongoose';

export interface IPodcast extends Document {
  title: string;
  videoUrl: string;
  addedAt: string;
}

const PodcastSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    addedAt: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IPodcast>('Podcast', PodcastSchema);
