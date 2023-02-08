import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import { validateTokenNewOrder, validateProductsIds } from '../middlewares/order.midd';

const router = Router();

const orderController = new OrderController();

router.get(
  '/',
  (req, res) => orderController.getAllOrders(req, res),
);

router.post(
  '/',
  validateTokenNewOrder,
  validateProductsIds,
  (req, res) => orderController.createOrders(req, res),
);

export default router;
