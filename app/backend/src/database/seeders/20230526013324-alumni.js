'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const alumnis = [
      {
        alumni_photo: 'victor-gonçalves-marques.png',
        alumni_name: 'Victor Gonçalves Marques',
        alumni_resume: 'I have obtained my MSc and BSc degrees in Biomedical Engineering from the Federal University of ABC (Brazil). I focused my research so far in cardiac electrophysiology, aiming to better understand atrial arrhythmias from a non-invasive perspective. Currently, I am doing my PhD at the Maastricht University (Netherlands), as one of the Early-Stage Researcher in the Personalize AF project, focusing on computer modeling of the heart and signal processing of atrial fibrillation',
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
      {
        alumni_photo: 'carlos-eduardo-basile-meneghini.png',
        alumni_name: 'Carlos Eduardo Basile Meneghini',
        alumni_resume: 'Development of a visualization interface for high-density torso biopotential mapping systems, 2019, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'giovanni-lazzarin-weber.png',
        alumni_name: 'Giovanni Lazzarin Weber',
        alumni_resume: 'Development of an animal electrophysiology system, 2018, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'andre-morilha-duarte.png',
        alumni_name: 'André Morilha Duarte',
        alumni_resume: 'Implementation and Validation of the Transfer Function Method for Cerebral Blood Flow Studies, 2018, Federal University of ABC (Final work for the Biomedical Engineering de gree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'kevin-chen-midorikawa.png',
        alumni_name: 'Kevin Chen Midorikawa',
        alumni_resume: 'Implementation and Validation of the Cerebral Autoregulation Index Method, 2018 , Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'rhuan-de-castro-correia.png',
        alumni_name: 'Rhuan de Castro Correia',
        alumni_resume: 'Development of a portable electrocardiographic system, 2018, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'lucas-tapias-de-carvalho.png',
        alumni_name: 'Lucas Tapias de Carvalho',
        alumni_resume: 'Development of an Electrocardiograph System for studies of Cardiac Electrophysiology in Experimental Animals, 2017, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'paula-micheski-silva.png',
        alumni_name: 'Paula Micheski Silva',
        alumni_resume: 'Feasibility Study for the Implementation of a Medical-Hospital Product Certification Body at UFABC, 2016, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'renata-romanelli-da-costa.png',
        alumni_name: 'Renata Romanelli da Costa',
        alumni_resume: 'CAAos platform – open source platform for the calculation of cerebral autoregulation: validation of the cerebral autoregulation index, 2020, Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'joao-vitor-firmino-costa.png',
        alumni_name: 'João Vitor Firmino Costa',
        alumni_resume: 'Moving Average (ARMA) in cerebral hemodynamic studies. 2018. Scientific Initiation. Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'pedro-machado-nery-dos-santos.png',
        alumni_name: 'Pedro Machado Nery dos Santos',
        alumni_resume: 'Assessment System in Brain Circulation. 2018. Scientific Initiation. Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'liandra-ayumi-federizi-yoshida.png',
        alumni_name: 'Liandra Ayumi Federizi Yoshida',
        alumni_resume: 'Synchronization of cerebral blood flow and blood pressure for cerebral autoregulation calculations. 2017. Scientific Initiation. Federal University of ABC (Final work for the Biomedical Engineering degree)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'thalles-de-antonio-trevizan.png',
        alumni_name: 'Thalles de Antonio Trevizan',
        alumni_resume: 'Analysis of electrical activity observed in high density intracardiac electrograms of Patients with Persistent Fibrillation Type. 2017. Scientific Initiation. (Graduating in Science and Technology), Federal University of ABC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'jaqueline-victal-de-almeida.png',
        alumni_name: 'Jaqueline Victal de Almeida',
        alumni_resume: 'Non-invasive analysis of electrical activity in mice. ( Graduating in Science and Technology ) – Federal University of ABC , National Council for Scientific and Technological Development',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumni_photo: 'thaniara-luz-dos-santos.png',
        alumni_name: 'Thaniara Luz dos Santos',
        alumni_resume: 'Development of an electrode suit for biopotential acquisition for Body Surface Potential Mapping systems. 2016. Scientific research. (Graduating in Biomedical Engineering) – Federal University of ABC , National Council for Scientific and Technological Development',
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