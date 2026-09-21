import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  position: string;
  university: string;
  country: string;
  review: string;
  image: string;
  rating: number;
  featured: boolean;
  status: 'Published' | 'Draft';
  createdAt: string;
}

const TestimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    university: { type: String, required: true },
    country: { type: String, required: true },
    review: { type: String, required: true },
    image: { type: String, default: '' },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ['Published', 'Draft'], default: 'Published' },
    createdAt: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
