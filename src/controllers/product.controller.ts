import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCode from '../helpers/status.code';

export default class ProductController {
  private model : ProductService;

  constructor() {
    this.model = new ProductService();
  }

  public async getAllProduct(_req: Request, res: Response) {
    const listProducts = await this.model.getAllProducts();
    res.status(statusCode.OK).json(listProducts);
  }

  public async createProduct(req: Request, res: Response) {
    const productCreated = await this.model.createProduct(req.body);
    res.status(statusCode.CREATED).json(productCreated);
  }
}
