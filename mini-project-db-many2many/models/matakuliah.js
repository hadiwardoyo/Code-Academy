"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mataKuliah.belongsToMany(models.praktikan, {
        through: models.mataPraktikum,
        foreignKey: "mataKuliah_id",
      });
    }
  }
  mataKuliah.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "nama cannot be empty",
          },
        },
      },
      jurusan: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "jurusan cannot be empty",
          },
        },
      },
      tahun_akademik: DataTypes.STRING,
      semester_akademik: DataTypes.STRING,
      jumlah_peserta: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function (mataKuliah, option) {
          mataKuliah.tahun_akademik = "2023/2024";
          mataKuliah.semester_akademik = "Ganjil";
          // mataKuliah.jumlah_peserta = null;
        },
      },
      sequelize,
      modelName: "mataKuliah",
    }
  );
  return mataKuliah;
};
