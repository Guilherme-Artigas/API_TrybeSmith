import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

const orderController = new OrderController();

router.get(
  '/',
  (req, res) => orderController.getAllOrders(req, res),
);

export default router;
