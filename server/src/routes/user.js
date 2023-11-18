import express from "express";
import multer from "multer";
import { body } from 'express-validator';

import userController from '../controllers/user-controller.js';
import { accessTokenValidator, validateInputFields, ctrlWrapper } from '../middlewares/index.js';

const router = express.Router();
const upload = multer();

const userValidations = [
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 50 }),
  body('name').optional().isLength({ min: 3, max: 50 }),
];

router.get('/', ctrlWrapper(userController.getUsers));
router.post('/', upload.single('avatar'), validateInputFields(userValidations), accessTokenValidator, ctrlWrapper(userController.addUser));
router.delete('/', ctrlWrapper(userController.deleteUsers));

export default router;