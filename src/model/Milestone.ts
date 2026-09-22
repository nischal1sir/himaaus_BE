import mongoose, { Schema, Document } from 'mongoose';

export interface IMilestone extends Document {
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
  displayOrder: number;
  status: 'Visible' | 'Hidden';
  createdAt: string;
}

const MilestoneSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    value: { type: Number, required: true },
    suffix: { type: String, default: '+' },
    description: { type: String, default: '' },
    icon: { type: String, default: 'Target' },
    displayOrder: { type: Number, default: 1 },
    status: { type: String, enum: ['Visible', 'Hidden'], default: 'Visible' },
    createdAt: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IMilestone>('Milestone', MilestoneSchema);
