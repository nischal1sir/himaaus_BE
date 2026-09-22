import { Request, Response } from 'express';
import EligibilitySubmission from '../model/EligibilitySubmission';
import Contact from '../model/Contact';
import Appointment from '../model/Appointment';
import Blog from '../model/Blog';
import Podcast from '../model/Podcast';

export const getDashboardStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const totalEligibility = await EligibilitySubmission.countDocuments();
    const totalLeads = await Contact.countDocuments();
    const totalAppointments = await Appointment.countDocuments();
    const totalBlogs = await Blog.countDocuments();
    const totalPodcasts = await Podcast.countDocuments();

    res.json({
      totalEligibility,
      totalLeads,
      totalAppointments,
      totalBlogs,
      totalPodcasts,
    });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
