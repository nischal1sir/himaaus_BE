import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../model/User';

export const seedAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if an admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' });

    if (existingAdmin) {
      res.status(400).json({
        success: false,
        message: 'Admin already exists. Seed can only be run once.',
      });
      return;
    }

    // Default admin credentials (can be overridden via request body)
    const name = req.body.name || 'Himaaus Admin';
    const email = req.body.email || 'admin@himaaus.com';
    const password = req.body.password || 'Admin@1234';

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'admin',
    });

    res.status(201).json({
      success: true,
      message: '✅ Admin user seeded successfully!',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
      credentials: {
        email,
        password,
        note: '⚠️ Please change your password immediately after first login.',
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
