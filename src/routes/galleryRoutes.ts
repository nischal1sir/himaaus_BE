import { Router } from 'express';
import { getGalleryItems, createGalleryItem, deleteGalleryItem } from '../controller/galleryController';

const router = Router();

router.get('/', getGalleryItems);
router.post('/', createGalleryItem);
router.delete('/:id', deleteGalleryItem);

export default router;
