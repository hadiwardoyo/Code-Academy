"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mataKuliahs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      jurusan: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tahun_akademik: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      semester_akademik: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      jumlah_peserta: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("mataKuliahs");
  },
};
