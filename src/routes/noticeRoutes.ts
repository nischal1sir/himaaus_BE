import { Router } from 'express';
import { getNotices, createNotice, updateNotice, deleteNotice } from '../controller/noticeController';

const router = Router();

router.get('/', getNotices);
router.post('/', createNotice);
router.put('/:id', updateNotice);
router.delete('/:id', deleteNotice);

export default router;
