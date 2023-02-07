import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  private connection : Pool;

  constructor(connectionE : Pool) {
    this.connection = connectionE;
  }

  public async getAllProducts() : Promise<IProduct[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return rows as IProduct[];
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
