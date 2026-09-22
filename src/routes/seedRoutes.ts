import { Router } from 'express';
import { seedAdmin } from '../controller/seedController';

const router = Router();

// POST /api/seed/admin
// Run ONCE to create the first admin user
router.post('/admin', seedAdmin);

export default router;
