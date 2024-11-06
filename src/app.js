import express from 'express';
import routes from './routes/UserRoutes.js';
import connectDB from './config/database.js';

const app = express();

connectDB();

app.use(express.json());
app.use(routes);


export default app;
