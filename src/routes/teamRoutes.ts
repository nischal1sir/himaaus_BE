import { Router } from 'express';
import { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember } from '../controller/teamController';

const router = Router();

router.get('/', getTeamMembers);
router.post('/', createTeamMember);
router.put('/:id', updateTeamMember);
router.delete('/:id', deleteTeamMember);

export default router;
