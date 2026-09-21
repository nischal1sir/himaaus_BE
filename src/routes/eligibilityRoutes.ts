import { Router } from 'express';
import {
  getSubmissions,
  createSubmission,
  updateSubmissionStatus,
  getCriteria,
  createCriteria,
  updateCriteria,
  deleteCriteria,
} from '../controller/eligibilityController';

const router = Router();

// Submissions routes
router.get('/submissions', getSubmissions);
router.post('/submissions', createSubmission);
router.put('/submissions/:id/status', updateSubmissionStatus);

// Criteria routes
router.get('/criteria', getCriteria);
router.post('/criteria', createCriteria);
router.put('/criteria/:id', updateCriteria);
router.delete('/criteria/:id', deleteCriteria);

export default router;
