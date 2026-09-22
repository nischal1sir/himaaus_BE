import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// Import Routes
import authRoutes from './routes/authRoutes';
import blogRoutes from './routes/blogRoutes';
import directorMessageRoutes from './routes/directorMessageRoutes';
import podcastRoutes from './routes/podcastRoutes';
import eligibilityRoutes from './routes/eligibilityRoutes';
import teamRoutes from './routes/teamRoutes';
import faqRoutes from './routes/faqRoutes';
import noticeRoutes from './routes/noticeRoutes';
import galleryRoutes from './routes/galleryRoutes';
import eventRoutes from './routes/eventRoutes';
import appointmentRoutes from './routes/appointmentRoutes';
import contactRoutes from './routes/contactRoutes';
import partnerRoutes from './routes/partnerRoutes';
import testimonialRoutes from './routes/testimonialRoutes';
import milestoneRoutes from './routes/milestoneRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import seedRoutes from './routes/seedRoutes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Himaaus Backend API is live and operational!',
  });
});

// API Routes matching IIC_Himaaus_Dash
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/director-message', directorMessageRoutes);
app.use('/api/podcasts', podcastRoutes);
app.use('/api/eligibility', eligibilityRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/milestones', milestoneRoutes);
app.use('/api/seed', seedRoutes);

export default app;
