import { Router } from 'express';
import UserController from '../controllers/user.controller';
import {
  validateUserName,
  validateVocation,
  validateLevel,
  validatePassword } from '../middlewares/user.midd';

const router = Router();

const userController = new UserController();

router.post(
  '/',
  validateUserName,
  validateVocation,
  validateLevel,
  validatePassword,
  (req, res) => userController.createUser(req, res),
);

export default router;
