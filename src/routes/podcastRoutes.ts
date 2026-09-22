import { Router } from 'express';
import { getPodcasts, createPodcast, updatePodcast, deletePodcast } from '../controller/podcastController';

const router = Router();

router.get('/', getPodcasts);
router.post('/', createPodcast);
router.put('/:id', updatePodcast);
router.delete('/:id', deletePodcast);

export default router;
