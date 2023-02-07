import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import statusCode from '../helpers/status.code';

export default class OrderController {
  private model : OrderService;

  constructor() {
    this.model = new OrderService();
  }

  public async getAllOrders(req: Request, res: Response) {
    const listOrders = await this.model.getAllOrders();
    res.status(statusCode.OK).json(listOrders);
  } 
}
