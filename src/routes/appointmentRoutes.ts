import { Router } from 'express';
import {
  getAppointments,
  createAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from '../controller/appointmentController';

const router = Router();

router.get('/', getAppointments);
router.post('/', createAppointment);
router.put('/:id/status', updateAppointmentStatus);
router.delete('/:id', deleteAppointment);

export default router;
