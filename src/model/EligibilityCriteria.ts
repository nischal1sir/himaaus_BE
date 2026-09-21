import mongoose, { Schema, Document } from 'mongoose';

export interface IEnglishRequirement {
  test: string;
  minScore: string;
}

export interface IEligibilityCriteria extends Document {
  country: string;
  minGPA: string;
  englishTestRequirements: IEnglishRequirement[];
  requiredDocuments: string[];
  isActive: boolean;
  lastUpdated: string;
}

const EligibilityCriteriaSchema: Schema = new Schema(
  {
    country: { type: String, required: true },
    minGPA: { type: String, required: true },
    englishTestRequirements: [
      {
        test: { type: String, required: true },
        minScore: { type: String, required: true },
      },
    ],
    requiredDocuments: [{ type: String }],
    isActive: { type: Boolean, default: true },
    lastUpdated: { type: String, default: () => new Date().toISOString().split('T')[0] },
  },
  { timestamps: true }
);

export default mongoose.model<IEligibilityCriteria>('EligibilityCriteria', EligibilityCriteriaSchema);
