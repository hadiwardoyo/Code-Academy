"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jurusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  jurusan.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "nama cannot be empty",
          },
        },
      },
      fakultas: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "fakultas cannot be empty",
          },
        },
      },
      tahun_didirikan: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "tahun cannot be empty",
          },
          isInt: {
            message: "Must be an integer number ",
          },
        },
      },
      nomor_akreditasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "jurusan",
    }
  );
  return jurusan;
};
