import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  private connection : Pool;

  constructor(connectionE : Pool) {
    this.connection = connectionE;
  }

  public async getAllOrders() : Promise<IOrder[]> {
    const [rows] = await this.connection.execute(
      `
        SELECT o.id, u.id AS 'userId', JSON_ARRAYAGG(p.id) AS 'productsIds'
        FROM Trybesmith.orders AS o
        INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
        INNER JOIN Trybesmith.users AS u ON u.id = o.user_id
        GROUP BY o.id;
      `,
    );
    return rows as IOrder[];
  }
}