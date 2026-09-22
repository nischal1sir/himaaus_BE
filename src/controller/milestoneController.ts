import { Request, Response } from 'express';
import Milestone from '../model/Milestone';

export const getMilestones = async (req: Request, res: Response): Promise<void> => {
  try {
    const milestones = await Milestone.find().sort({ displayOrder: 1, createdAt: -1 });
    res.json(milestones);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createMilestone = async (req: Request, res: Response): Promise<void> => {
  try {
    const milestone = await Milestone.create(req.body);
    res.status(201).json(milestone);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateMilestone = async (req: Request, res: Response): Promise<void> => {
  try {
    const milestone = await Milestone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!milestone) {
      res.status(404).json({ message: 'Milestone not found' });
      return;
    }
    res.json(milestone);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteMilestone = async (req: Request, res: Response): Promise<void> => {
  try {
    const milestone = await Milestone.findByIdAndDelete(req.params.id);
    if (!milestone) {
      res.status(404).json({ message: 'Milestone not found' });
      return;
    }
    res.json({ message: 'Milestone deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
