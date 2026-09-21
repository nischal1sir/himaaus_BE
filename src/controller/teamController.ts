import { Request, Response } from 'express';
import TeamMember from '../model/TeamMember';

export const getTeamMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const team = await TeamMember.find().sort({ createdAt: -1 });
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const member = await TeamMember.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    res.json(member);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id);
    if (!member) {
      res.status(404).json({ message: 'Team member not found' });
      return;
    }
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
