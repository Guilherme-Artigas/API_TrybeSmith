import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCode from '../helpers/status.code';

export default class UserController {
  private model : UserService;

  constructor() {
    this.model = new UserService();
  }

  public async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const response = await this.model.login(username, password);
    if (typeof response === 'string') return res.status(statusCode.OK).json({ token: response });
    res.status(statusCode.UNAUTHORIZED).json(response);
  }

  public async createUser(req: Request, res: Response) {
    const token = await this.model.createUser(req.body);
    res.status(statusCode.CREATED).json({ token });
  }
}
