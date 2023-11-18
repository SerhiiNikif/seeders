import ApiError from "../exceptions/api-error.js";
import multer from "multer";

export default function (err, req, res, next) {
  console.log(err);
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message, errors: err.errors})
  }
  if (err instanceof multer.MulterError && err.field !== 'avatar') {
    return res.status(400).json({ error: 'Invalid file field name. Make sure you use "avatar".' });
  }
  return res.status(500).json({message: 'Unexpected error'})
};
