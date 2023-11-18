import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { apiErrorHandler } from "./middlewares/index.js";
import configureRoutes from './routes/configureRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

configureRoutes(app);

app.use(apiErrorHandler);

export default app;