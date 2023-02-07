import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLoginUser from '../middlewares/login.midd';

const router = Router();

const userController = new UserController();

router.post(
  '/',
  validateLoginUser,
  (req, res) => userController.login(req, res),
);

export default router;
