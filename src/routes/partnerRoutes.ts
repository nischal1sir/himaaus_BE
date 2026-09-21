import { Router } from 'express';
import { getPartners, createPartner, updatePartner, deletePartner } from '../controller/partnerController';

const router = Router();

router.get('/', getPartners);
router.post('/', createPartner);
router.put('/:id', updatePartner);
router.delete('/:id', deletePartner);

export default router;
