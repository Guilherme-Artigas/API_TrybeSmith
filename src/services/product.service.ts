import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface'; 

export default class ProductService {
  private model : ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts() : Promise<IProduct[]> {
    return this.model.getAllProducts();
  }

  public async getProductById(id: number) : Promise<IProduct> {
    return this.model.getProductById(id);
  }

  public async createProduct(product : IProduct) : Promise<IProduct> {
    return this.model.createProduct(product);
  }
}
