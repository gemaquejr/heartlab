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
      {
        alumni_photo: 'rafael-caran-fernandes.png',
        alumni_name: 'Rafael Caran Fernandes',
        alumni_resume: 'Systematic review of artificial intelligence methods applied to cardiac arrhythmia classification, 2020, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'aline-geannaccini-ralho.png',
        alumni_name: 'Aline Geannaccini Ralho',
        alumni_resume: 'Tracking of Surgical Instrumentation in the Brazilian Unified Health System. , 2020, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'renata-silva-dos-santos.png',
        alumni_name: 'Renata Silva dos Santos',
        alumni_resume: 'A systematic review of diagnosis and monitoring of atrial fibrillation using wearable devices. , 2020, Federal University of ABC (Final work for the Biomedical Engineering degree)',
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