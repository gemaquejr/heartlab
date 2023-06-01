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
      {
        undergrad_photo: 'jhonnathan-henry-rodrigues-pereira.png',
        undergrad_name: 'Jhonnathan Henry Rodrigues Pereira',
        undergrad_resume: 'My participation in the group is as a student of Researching From the First Day (PDPD). Hobbies: Read, watch movies, series and animes, play multiple games. Education: Graduate student of Interdisciplinar Bachelor of Science and Technology at UFABC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        undergrad_photo: 'maria-rduarda-tramontina-antunes.png',
        undergrad_name: 'Maria Eduarda Tramontina Antunes',
        undergrad_resume: 'My participation in the group is as a student of Scientific Initiation in the area of cardiac arrhythmias and the understanding of atrial electrical activity propagation focused on atrial fibrillation. Atrial Fibrillation (AF) is one of the most common forms of arrhythmia , and, although there are clinical researches, mathematical models, and other technologies available, the mechanism of the AF is still not entirely understood. My project is related to that. Using the openCARP software and its python framework – carputils – the goal is to run some simulations using pre-existing mathematical/computational models, such as Countermanche’s; firstly simulating healthy hearts, then introducing some irregularities, in order to better understand the propagation of atrial electrical activity. Education: Undergraduate student at Federal University of ABC (UFABC) – Bachelor in Science and Technology and Biomedical Engineering. Hobbies: music and musical instruments, sports, traveling, books, series and movies',
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