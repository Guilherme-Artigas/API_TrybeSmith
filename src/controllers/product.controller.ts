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

  public async getProductById(req: Request, res: Response) {
    const productFound = await this.model.getProductById(parseInt(req.params.id, 10));
    if (!productFound) {
      return res.status(statusCode.NOT_FOUND).json({ message: 'Product not found' });
    }
    res.status(statusCode.OK).json(productFound);
  }

  public async createProduct(req: Request, res: Response) {
    const productCreated = await this.model.createProduct(req.body);
    res.status(statusCode.CREATED).json(productCreated);
  }
}
