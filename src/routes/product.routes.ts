import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateNameProduct, validateAmountProduct } from '../middlewares/product.midd';

const router = Router();

const productController = new ProductController();

router.get(
  '/',
  (req, res) => productController.getAllProduct(req, res),
);

router.get(
  '/:id',
  (req, res) => productController.getProductById(req, res),
);

router.post(
  '/',
  validateNameProduct,
  validateAmountProduct,
  (req, res) => productController.createProduct(req, res),
);

export default router;
