const { DataTypes } = require("sequelize");
const instance = require("../Connection");

const users = instance.sequelize.define(
  "users",
  {
    userID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
    tableName: "users",
  }
);

exports.model = users;
