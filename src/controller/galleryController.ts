import { Request, Response } from 'express';
import Gallery from '../model/Gallery';

export const getGalleryItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const gallery = await Gallery.find().sort({ createdAt: -1 });
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createGalleryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await Gallery.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteGalleryItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id);
    if (!item) {
      res.status(404).json({ message: 'Gallery item not found' });
      return;
    }
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
