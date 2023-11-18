import { DataTypes } from "sequelize";

import sequelize from "../config/sequelizeSetup.js";
import User from './User.js';

const Token = sequelize.define('token', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tokens',
});

export default Token;
