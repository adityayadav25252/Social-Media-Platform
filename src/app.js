import express from 'express'
import routes from './routes/auth.routes.js';
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json())
app.use(cookieParser());
app.use('/user', routes);

export default  app