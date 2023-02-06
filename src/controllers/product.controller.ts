import { Request, Response } from 'express';
import statusCode from '../helpers/status.code';
import ProductService from '../services/product.service';

class ProductController {
  private model : ProductService;

  constructor() {
    this.model = new ProductService();
  }

  public async getAllProduct(req: Request, res: Response) {
    const listProducts = await this.model.getAllProducts();
    res.status(statusCode.OK).json(listProducts);
  }

  public async createProduct(req: Request, res: Response) {
    const productCreated = await this.model.createProduct(req.body);
    res.status(statusCode.CREATED).json(productCreated);
  }
}

export default ProductController;
