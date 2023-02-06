import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product';

export default class ProductModel {
  private connection : Pool;

  constructor(connectionE : Pool) {
    this.connection = connectionE;
  }

  public async createProduct(product : IProduct) : Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }
}
