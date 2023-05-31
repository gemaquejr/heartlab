'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('undergradStudents', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      undergrad_photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      undergrad_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      undergrad_resume: {
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
    await queryInterface.dropTable('undergradStudents');
  }
};