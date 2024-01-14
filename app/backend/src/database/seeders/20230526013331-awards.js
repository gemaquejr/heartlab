'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const awards = [
      {
        age: '2022',
        award: '2022 First place in the Women in Optics and Photonics Award 2022: “A Robust Conduction Velocity Pipeline Method for Guiding Evaluation of the Electrophysiological Effect Due to Radiofrequency Catheter Ablation” (Siles J: student, Salinet J: supervisor), Women in Optics and Photonics, OSA, Federal University of São Paulo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2021',
        award: '2021 Best undergraduation research prize: Propagation of cardiac electrical activity: a computational and experimental contribution (Costa G: student, Salinet J: supervisor). IV Workshop of Inovation on Biomedical Engineering (IV WIEB), Federal University of São Paulo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        award: '2020 Best Remote Poster Presentation Prize at the 2020 Annual Conference of Computing in Cardiology, Rimini, Itália. Title: Classification and Location of Atrial Arrhythmic Mechanisms with Body Surface Potential Mapping (Marques V: student, Salinet J: supervisor). 2020 Annual Conference of Computing in Cardiology.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        award: '2019 Shortlisted for the International Meeting of the 27o SIICUSP, São Paulo University. Title: Assessment System in Brain Hemodynamics (Machado P: student, Salinet J: supervisor).',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        award: '2018 Featured publication by the work “Almeida et al., Characterization of human persistent atrial fibrillation electrograms using recurrence quantification analysis”, Chaos: An Interdisciplinary Journal of Nonlinear Science.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        award: '2018 Best poster prize prize, session Atrial Fibrillation – “Unsupervised k-mean classification of atrial electrograms from human persistent atrial fibrillation” (coautor), Computing on Cardiology.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        award: '2017 Young Investigators Competition (YIC) Finalist, Heart Rhythm Congress.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        award: '2017 IFMBE-IAMBE Early Career Award 2017 nomination winner by the Brazilian Biomedical Engineering Society (SBEB) for the research excellence in Biomedical Engineering, International Federation for Medical and Biological Engineering (IFMBE).',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        award: '2017 Shortlisted to Latin America Engineering Impact Awards 2017, category Research., National Instrument.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        award: '2017 Editors choice (Editorial) Li X et al., An interactive platform to guide catheter ablation in human persAF using dominant frequency, organization and phase mapping, Computer Methods and Programs in Biomedicine.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        award: '2017 Editor’s choice (Editorial) Salinet et al., Propagation of meandering rotors surrounded by high dominant frequency areas in persistent atrial fibrillation, Heart Rhythm.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        award: '2015 Young Investigators Competition (YIC) Finalist, Heart Rhythm Congress.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2013',
        award: '2013 Student Santander Travel Awards 2012-13, Santander Bank from UK.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        award: '2012 David Holme Memorial Prize 2012 (BEng Student: Joseph Ahuja, Co-supervisor: João Loures Salinet Júnior)., Engineering Department, University of Leicester.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        award: '2012 Young Investigators Competition (YIC) Finalist, Heart Rhythm Congress.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2011',
        award: '2011 I. Mech. E Best Project Prize 2011 (BEng Student: Samuel Bidder, Co-supervisor: João Loures Salinet Júnior, Engineering Department, University of Leicester.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2011',
        award: '2011 Project Presentation Prize 2011 (BEng Student: Samuel Bidder, Co-supervisor: João Loures Salinet Júnior), Engineering Department, University of Leicester.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('awards', awards, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('awards', null, {});
  }
};