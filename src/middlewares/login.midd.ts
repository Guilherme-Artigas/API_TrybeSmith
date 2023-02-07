import { Request, Response, NextFunction } from 'express';
import statusCode from '../helpers/status.code';

const validateLoginUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"password" is required' });
  }
  next();
};

export default validateLoginUser;
