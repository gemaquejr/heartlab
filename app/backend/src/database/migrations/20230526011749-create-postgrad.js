'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('postgrad_students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      experience: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postgrad_photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postgrad_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
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
      advisor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postgrad_resume: {
        type: Sequelize.STRING(1500),
        allowNull: false,
      },
      hobbies: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      education: {
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
    await queryInterface.dropTable('postgrad_students');
  }
};