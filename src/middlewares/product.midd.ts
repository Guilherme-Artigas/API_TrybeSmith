import { Request, Response, NextFunction } from 'express';
import statusCode from '../helpers/status.code';

const validateNewProductRegistration = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (!name || !amount) {
    return res.status(statusCode.BAD_REQUEST).send('name e amount são campos obrigatórios');
  }
  next();
};

export default validateNewProductRegistration;
