import { Router } from 'express';
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../controller/blogController';

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;
