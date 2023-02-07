import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateNewUserRegistration from '../middlewares/user.midd';

const router = Router();

const userController = new UserController();

router.post(
  '/',
  validateNewUserRegistration,
  (req, res) => userController.createUser(req, res),
);

export default router;
