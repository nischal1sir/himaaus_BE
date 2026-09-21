import { Router } from 'express';
import {
  getContacts,
  createContact,
  updateContactStatus,
  deleteContact,
} from '../controller/contactController';

const router = Router();

router.get('/', getContacts);
router.post('/', createContact);
router.put('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
