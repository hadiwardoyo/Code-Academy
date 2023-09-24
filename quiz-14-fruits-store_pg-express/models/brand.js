"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      brand.hasMany(models.fruit, { foreignKey: "brand_id" });
    }
  }
  brand.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can not be empty",
          },
        },
      },
      image: DataTypes.STRING,
      city: DataTypes.STRING,
      total_employees: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "brand",
    }
  );
  return brand;
};
