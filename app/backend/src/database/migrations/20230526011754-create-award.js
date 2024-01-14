'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('awards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      award: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('awards');
  }
};