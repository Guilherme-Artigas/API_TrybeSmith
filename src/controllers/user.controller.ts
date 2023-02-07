import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCode from '../helpers/status.code';

export default class UserController {
  private model : UserService;

  constructor() {
    this.model = new UserService();
  }

  public async createUser(req: Request, res: Response) {
    const token = await this.model.createUser(req.body);
    res.status(statusCode.CREATED).json({ token });
  }
}
