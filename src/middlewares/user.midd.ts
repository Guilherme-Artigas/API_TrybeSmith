import { Request, Response, NextFunction } from 'express';
import statusCode from '../helpers/status.code';

export const validateUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(statusCode.UNPROCESSABLE).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(statusCode.UNPROCESSABLE)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  next();
};

export const validateVocation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"vocation" is required' });
  }
  if (typeof vocation !== 'string') {
    return res.status(statusCode.UNPROCESSABLE).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res.status(statusCode.UNPROCESSABLE)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  next();
};

export const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(statusCode.UNPROCESSABLE).json({ message: '"level" must be a number' });
  }
  if (level < 1) {
    return res.status(statusCode.UNPROCESSABLE)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(statusCode.UNPROCESSABLE).json({ message: '"password" must be a string' });
  }
  if (password.length < 9) {
    return res.status(statusCode.UNPROCESSABLE)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  next();
};
