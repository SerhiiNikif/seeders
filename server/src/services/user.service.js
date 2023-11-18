import axios from "axios";
import sharp from "sharp";
import bcrypt from 'bcrypt';
import {Sequelize} from "sequelize";

import UserModel from "../models/User.js";
import ApiError from "../exceptions/api-error.js";
import tokenModel from '../models/Token.js';

import tinify from "tinify";
tinify.key = process.env.TINIFY_API_URL;

class UserService {
  async getUsers(page = 1, limit = 6) {
    const offset = (page - 1) * limit;

    const users = await UserModel.findAll({offset, limit});

    const totalUsers = await UserModel.count();
    const countPages = Math.ceil(totalUsers / limit);

    return {users, countPages, limit};
  }

  async addUser(name, password, email, avatar) {
    email && await this.checkIfEmailExists(email);

    if (avatar) {
      const processedImage = await this.cropAndResizeToJPEG(avatar);
      avatar = await this.uploadImageToTinify(processedImage);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const newUser = await UserModel.create({name, password: hashPassword, email, avatar});

    return newUser;
  }

  async deleteUsers(email) {
    let result;
    if (email) {
      result = await UserModel.destroy({
        where: {
          email: {
            [Sequelize.Op.not]: email,
          },
        },
      });
    } else {
      await tokenModel.destroy({ where: {}})
      result = await UserModel.destroy({where: {}})
    }

    return result
  }

  async cropAndResizeToJPEG(avatar) {
    const croppedImageBuffer = await sharp(avatar)
      .resize(70, 70, { fit: "cover" })
      .toFormat("jpeg")
      .toBuffer();

    return croppedImageBuffer;
  }
  
  async uploadImageToTinify(imageBuffer) {
    const response = await axios.post(
      process.env.TINIFY_API_URL,
      imageBuffer,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.TINIFY_API_KEY).toString(
            "base64"
          )}`,
        },
      }
    );
    return response.data.output.url;
  }

  async checkIfEmailExists(email) {
    const user = await UserModel.findOne({where: {email}})
    if (user) {
        throw ApiError.BadRequest(`Email ${email} already exists`);
    }
  }
}

export default new UserService();