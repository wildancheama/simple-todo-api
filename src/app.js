import express from 'express';
import healthRoutes from './routes/health.router.js';
import todoRoutes from './routes/todo.router.js';
import { notFound, errorHandler } from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());

//routes
app.use(healthRoutes);
app.use(todoRoutes);

//404 + error handler
app.use(notFound);
app.use(errorHandler);

export default app;
