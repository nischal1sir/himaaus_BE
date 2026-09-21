import { Request, Response } from 'express';
import FAQ from '../model/FAQ';

export const getFAQs = async (req: Request, res: Response): Promise<void> => {
  try {
    const faqs = await FAQ.find().sort({ createdAt: -1 });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createFAQ = async (req: Request, res: Response): Promise<void> => {
  try {
    const faq = await FAQ.create(req.body);
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateFAQ = async (req: Request, res: Response): Promise<void> => {
  try {
    const faq = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faq) {
      res.status(404).json({ message: 'FAQ not found' });
      return;
    }
    res.json(faq);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteFAQ = async (req: Request, res: Response): Promise<void> => {
  try {
    const faq = await FAQ.findByIdAndDelete(req.params.id);
    if (!faq) {
      res.status(404).json({ message: 'FAQ not found' });
      return;
    }
    res.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
