"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mataPraktikums", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mataKuliah_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      praktikan_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      kelas: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hari: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pukul: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("mataPraktikums");
  },
};
