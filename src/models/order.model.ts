import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async createOrders(idUser: number | undefined, productsIds: number[]) : Promise<void> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [idUser],
    );
    productsIds.forEach(async (idP) => {
      await this.connection.execute(
        `
          UPDATE Trybesmith.products
          SET order_id = ?
          WHERE id = ?
        `,
        [insertId, idP],
      );
    });
  }
}
