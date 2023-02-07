import express from 'express';
import ProductRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';
import LoginRoutes from './routes/login.routes';
import OrderRoutes from './routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoutes);

app.use('/users', UserRoutes);

app.use('/login', LoginRoutes);

app.use('/orders', OrderRoutes);

export default app;
