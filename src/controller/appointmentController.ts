import { Request, Response } from 'express';
import Appointment from '../model/Appointment';

export const getAppointments = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createAppointment = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateAppointmentStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!appointment) {
      res.status(404).json({ message: 'Appointment not found' });
      return;
    }
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteAppointment = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      res.status(404).json({ message: 'Appointment not found' });
      return;
    }
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
