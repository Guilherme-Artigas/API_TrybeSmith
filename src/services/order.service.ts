import connection from '../models/connection';
import OrderModel from '../models/order.model';
import IOrder from '../interfaces/order.interface';

export default class OrderService {
  private model : OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders() : Promise<IOrder[]> {
    return this.model.getAllOrders();
  }
}
