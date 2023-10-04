"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mataPraktikum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mataPraktikum.belongsTo(models.mataKuliah, {
        foreignKey: "mataKuliah_id",
      });
      mataPraktikum.belongsTo(models.praktikan, { foreignKey: "praktikan_id" });
    }
  }
  mataPraktikum.init(
    {
      mataKuliah_id: DataTypes.INTEGER,
      praktikan_id: DataTypes.INTEGER,
      kelas: DataTypes.STRING,
      hari: DataTypes.STRING,
      pukul: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mataPraktikum",
    }
  );
  return mataPraktikum;
};
