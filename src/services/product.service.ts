import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product'; 

class ProductService {
  public model : ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts() : Promise<IProduct[]> {
    return this.model.getAllProducts();
  }

  public async createProduct(product : IProduct) : Promise<IProduct> {
    return this.model.createProduct(product);
  }
}

export default ProductService;
