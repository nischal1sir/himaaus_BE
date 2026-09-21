import { Request, Response } from 'express';
import Partner from '../model/Partner';

export const getPartners = async (req: Request, res: Response): Promise<void> => {
  try {
    const partners = await Partner.find().sort({ createdAt: -1 });
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createPartner = async (req: Request, res: Response): Promise<void> => {
  try {
    const partner = await Partner.create(req.body);
    res.status(201).json(partner);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updatePartner = async (req: Request, res: Response): Promise<void> => {
  try {
    const partner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!partner) {
      res.status(404).json({ message: 'Partner not found' });
      return;
    }
    res.json(partner);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deletePartner = async (req: Request, res: Response): Promise<void> => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);
    if (!partner) {
      res.status(404).json({ message: 'Partner not found' });
      return;
    }
    res.json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
