import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interfaces/user';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'wow';

function createTokenJWT(user : IUser) {
  const config : SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(user, SECRET, config);
  return token;
}

export default createTokenJWT;
