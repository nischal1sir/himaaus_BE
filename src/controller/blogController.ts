import { Request, Response } from 'express';
import Blog from '../model/Blog';

export const getBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog post not found' });
      return;
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
