'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const alumnis = [
      {
        alumni_photo: 'victor-gonçalves-marques.png',
        alumni_name: 'Victor Gonçalves Marques',
        alumni_resume: 'I have obtained my MSc and BSc degrees in Biomedical Engineering from the Federal University of ABC (Brazil). I focused my research so far in cardiac electrophysiology, aiming to better understand atrial arrhythmias from a non-invasive perspective. Currently, I am doing my PhD at the Maastricht University (Netherlands), as one of the Early-Stage Researcher in the Personalize AF project, focusing on computer modeling of the heart and signal processing of atrial fibrillation.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('alumnis', alumnis, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('alumnis', null, {});
  }
};