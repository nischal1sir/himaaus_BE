import { Router } from 'express';
import { getDirectorMessage, updateDirectorMessage } from '../controller/directorMessageController';

const router = Router();

router.get('/', getDirectorMessage);
router.post('/', updateDirectorMessage);
router.put('/', updateDirectorMessage);

export default router;
