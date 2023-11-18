import express from "express";

import seederController from '../controllers/seeder-controller.js';
import { ctrlWrapper } from '../middlewares/index.js';

const router = express.Router();

router.post('/', ctrlWrapper(seederController.insertData));

export default router;