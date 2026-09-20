import { Request, Response } from 'express';
import DirectorMessage from '../model/DirectorMessage';

export const getDirectorMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const message = await DirectorMessage.findOne().sort({ createdAt: -1 });
    res.json(message || null);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateDirectorMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, designation, message } = req.body;
    let directorMsg = await DirectorMessage.findOne();

    if (directorMsg) {
      directorMsg.name = name ?? directorMsg.name;
      directorMsg.designation = designation ?? directorMsg.designation;
      directorMsg.message = message ?? directorMsg.message;
      await directorMsg.save();
    } else {
      directorMsg = await DirectorMessage.create({ name, designation, message });
    }

    res.json(directorMsg);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
