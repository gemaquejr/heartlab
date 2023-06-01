'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const undergrad = [
      {
        undergrad_photo: 'felipe-braga-fonseca.png',
        undergrad_name: 'Felipe Braga Fonseca',
        undergrad_resume: 'My participation in the group is as a student of Researching From the First Day (PDPD). Hobbies: Sports, animes, watch Flamengo (Brazilian soccer team) playing, learn and read. Education: Graduate student of Interdisciplinar Bachelor of Science and Technology at UFABC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('undergradStudents', undergrad, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('undergradStudents', null, {});
  }
};