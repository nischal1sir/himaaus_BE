import mongoose, { Schema, Document } from 'mongoose';

export interface IEligibilitySubmission extends Document {
  studentName: string;
  email: string;
  phone: string;
  destinationCountry: string;
  highestQualification: string;
  gpaOrPercentage: string;
  englishTest: string;
  englishScore: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedAt: string;
}

const EligibilitySubmissionSchema: Schema = new Schema(
  {
    studentName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    destinationCountry: { type: String, required: true },
    highestQualification: { type: String, required: true },
    gpaOrPercentage: { type: String, required: true },
    englishTest: { type: String, required: true },
    englishScore: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    submittedAt: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IEligibilitySubmission>('EligibilitySubmission', EligibilitySubmissionSchema);
