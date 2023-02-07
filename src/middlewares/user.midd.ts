import { Request, Response, NextFunction } from 'express';
import statusCode from '../helpers/status.code';

const validateNewUserRegistration = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  if (!username || !vocation || !level || !password) {
    return res.status(statusCode.BAD_REQUEST).send('Informe username, vocation, level, password');
  }
  next();
};

export default validateNewUserRegistration;
