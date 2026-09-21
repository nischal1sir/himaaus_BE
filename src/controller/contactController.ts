import { Request, Response } from 'express';
import Contact from '../model/Contact';

export const getContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateContactStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!contact) {
      res.status(404).json({ message: 'Contact message not found' });
      return;
    }
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404).json({ message: 'Contact message not found' });
      return;
    }
    res.json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
