import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interfaces/user.interface';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'wow';

export function createTokenJWT(user : IUser) {
  const config : SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(user, SECRET, config);
  return token;
}

export function validateToken(token: string | undefined) : string | JwtPayload | void {
  try {
    if (token !== undefined) {
      const decoded = jwt.verify(token, SECRET);
      return decoded;
    }
  } catch (e) {
    console.log(e);
  }
}
