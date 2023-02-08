import { Request, Response, NextFunction } from 'express';
import statusCode from '../helpers/status.code';
import { validateToken } from '../utils/token.generate';

export const validateTokenNewOrder = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(statusCode.UNAUTHORIZED).json({ message: 'Token not found' });
  }
  const verifyToken = validateToken(authorization);
  if (!verifyToken) {
    return res.status(statusCode.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  next();
};

export const validateProductsIds = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res.status(statusCode.UNPROCESSABLE).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length < 1) {
    return res.status(statusCode.UNPROCESSABLE)
      .json({ message: '"productsIds" must include only numbers' });
  }

  next();
};
