import mongoose, { Schema, Document } from 'mongoose';

export interface IDirectorMessage extends Document {
  name: string;
  designation: string;
  message: string;
  updatedAt: Date;
}

const DirectorMessageSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IDirectorMessage>('DirectorMessage', DirectorMessageSchema);
