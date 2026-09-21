import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
}

const AppointmentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    service: { type: String, default: 'General Consultation' },
    notes: { type: String, default: '' },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
  },
  { timestamps: true }
);

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
