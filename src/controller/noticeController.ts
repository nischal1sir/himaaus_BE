import { Request, Response } from 'express';
import Notice from '../model/Notice';

export const getNotices = async (req: Request, res: Response): Promise<void> => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createNotice = async (req: Request, res: Response): Promise<void> => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json(notice);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateNotice = async (req: Request, res: Response): Promise<void> => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notice) {
      res.status(404).json({ message: 'Notice not found' });
      return;
    }
    res.json(notice);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteNotice = async (req: Request, res: Response): Promise<void> => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      res.status(404).json({ message: 'Notice not found' });
      return;
    }
    res.json({ message: 'Notice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
