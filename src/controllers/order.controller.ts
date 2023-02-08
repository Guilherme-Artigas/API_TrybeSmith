import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import statusCode from '../helpers/status.code';
import { validateToken } from '../utils/token.generate';
import IUser from '../interfaces/user.interface';

export default class OrderController {
  private model : OrderService;

  constructor() {
    this.model = new OrderService();
  }

  public async getAllOrders(_req: Request, res: Response) {
    const listOrders = await this.model.getAllOrders();
    res.status(statusCode.OK).json(listOrders);
  }

  public async createOrders(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { productsIds } = req.body;
    const { id } = <IUser> validateToken(authorization);
    const newOrder = await this.model.createOrders(id, productsIds);
    res.status(statusCode.CREATED).json(newOrder);
  }
}
