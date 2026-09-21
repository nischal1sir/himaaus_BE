import { Request, Response } from 'express';
import EligibilitySubmission from '../model/EligibilitySubmission';
import EligibilityCriteria from '../model/EligibilityCriteria';

// Submissions
export const getSubmissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const submissions = await EligibilitySubmission.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createSubmission = async (req: Request, res: Response): Promise<void> => {
  try {
    const submission = await EligibilitySubmission.create(req.body);
    res.status(201).json(submission);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateSubmissionStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status } = req.body;
    const submission = await EligibilitySubmission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!submission) {
      res.status(404).json({ message: 'Submission not found' });
      return;
    }
    res.json(submission);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Criteria
export const getCriteria = async (req: Request, res: Response): Promise<void> => {
  try {
    const criteria = await EligibilityCriteria.find().sort({ createdAt: -1 });
    res.json(criteria);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createCriteria = async (req: Request, res: Response): Promise<void> => {
  try {
    const criteria = await EligibilityCriteria.create(req.body);
    res.status(201).json(criteria);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateCriteria = async (req: Request, res: Response): Promise<void> => {
  try {
    const criteria = await EligibilityCriteria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!criteria) {
      res.status(404).json({ message: 'Criteria not found' });
      return;
    }
    res.json(criteria);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteCriteria = async (req: Request, res: Response): Promise<void> => {
  try {
    const criteria = await EligibilityCriteria.findByIdAndDelete(req.params.id);
    if (!criteria) {
      res.status(404).json({ message: 'Criteria not found' });
      return;
    }
    res.json({ message: 'Criteria deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
