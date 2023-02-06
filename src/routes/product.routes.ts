import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateNewProductRegistration from '../middlewares/product.midd';

const router = Router();

const productController = new ProductController();

router.post(
  '/',
  validateNewProductRegistration,
  (req, res) => productController.createProduct(req, res),
);

export default router;
