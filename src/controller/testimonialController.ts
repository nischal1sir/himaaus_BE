import { Request, Response } from 'express';
import Testimonial from '../model/Testimonial';

export const getTestimonials = async (req: Request, res: Response): Promise<void> => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createTestimonial = async (req: Request, res: Response): Promise<void> => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateTestimonial = async (req: Request, res: Response): Promise<void> => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!testimonial) {
      res.status(404).json({ message: 'Testimonial not found' });
      return;
    }
    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteTestimonial = async (req: Request, res: Response): Promise<void> => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      res.status(404).json({ message: 'Testimonial not found' });
      return;
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
