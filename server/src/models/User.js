import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeSetup.js";

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: "https://img.freepik.com/premium-photo/man-with-red-haircut-red-shirt-with-black-frame-around-his-neck_745528-3200.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais"
  }
}, {
  tableName: 'users',
});

export default User;