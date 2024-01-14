'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('associatedResearchers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      researchers_photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      researchers_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      curriculum: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      researchers_resume: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('associatedResearchers');
  }
};