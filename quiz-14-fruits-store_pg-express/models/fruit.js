"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fruit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fruit.belongsTo(models.brand, { foreignKey: "brand_id" });
      fruit.belongsTo(models.category, { foreignKey: "categories_id" });
    }
  }
  fruit.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      categories_id: DataTypes.INTEGER,
      brand_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "fruit",
    }
  );
  return fruit;
};
