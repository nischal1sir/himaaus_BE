import { Request, Response } from 'express';
import Podcast from '../model/Podcast';

export const getPodcasts = async (req: Request, res: Response): Promise<void> => {
  try {
    const podcasts = await Podcast.find().sort({ createdAt: -1 });
    res.json(podcasts);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createPodcast = async (req: Request, res: Response): Promise<void> => {
  try {
    const podcast = await Podcast.create(req.body);
    res.status(201).json(podcast);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updatePodcast = async (req: Request, res: Response): Promise<void> => {
  try {
    const podcast = await Podcast.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!podcast) {
      res.status(404).json({ message: 'Podcast episode not found' });
      return;
    }
    res.json(podcast);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deletePodcast = async (req: Request, res: Response): Promise<void> => {
  try {
    const podcast = await Podcast.findByIdAndDelete(req.params.id);
    if (!podcast) {
      res.status(404).json({ message: 'Podcast episode not found' });
      return;
    }
    res.json({ message: 'Podcast deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
