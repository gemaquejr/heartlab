'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const journals = [
      {
        age: '2022',
        journal: 'Siles-Paredes JG, Crowley CJ, Fenton FH, Bhatia N, Iravanian S, Sandoval I, Pollnow S, D ̈ossel O, Salinet J, Uzelac I. Circle method for robust estimation of local conduction velocity high-density maps from optical mapping data: Characterization of radiofrequency ablation sites. Frontiers in Physiology 2022;13.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2021',
        journal: 'Salinet J, Moura FS, Romanelli R, dos Santos PMN, Panerai RB, Duarte AM, Bor-Seng-Shu E, Salinet ASM. CAAos platform: An integrated platform for analysis of cerebral hemodynamics data. Physiol. Meas. 2021 42 104002.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2021',
        journal: 'Goroso G, Watanabe WT, Napoleone F, Silva DP, Salinet J, Silva RR, Puglisi JL. Remote monitoring of heart rate variability for obese children. Biomedical Signal Processing and Control, 2021, v. 66, p. 102453.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2021',
        journal: 'Li X, Chu G, Almeida TP, Vanheusden FJ, Salinet J, Dastagir N, Mistry AR, Vali Z, Sidhu B, Stafford P, Schilindwein FS, Ng GA. Automatic Extraction of Recurrent Patterns of High Dominant Frequency Mapping During Human Persistent Atrial Fibrillation. Frontiers in Physiology, 2021 12 286.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2021',
        journal: 'SALINET, J.; Molero R, Olero R, Schilindwein FS, Karel J, Rodrigo M, Rojo-Alvarez JL, Berenfeld O, Climent A, Zenger B, Vanheusden FJ, Paredes JGS, Macleaod R, Atienza F, Guillem MS, Cluitmans M, Bonizzi P. Electrocardiographic imaging for atrial fibrillation: a perspective from computer models and animal experiments to clinical value. Frontiers in Physiology, v. 12, p. 653013, 2021.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        journal: 'MARQUES, VICTOR GONÇALVES ; RODRIGO, MIGUEL ; GUILLEM, MARIA DE LA SALUD ; SALINET, J. L. A robust wavelet-based approach for dominant frequency analysis of atrial fibrillation in body surface signals. Physiological Measurement, v. 41, p. 075004, 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        journal: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; SALINET, J. L. . Characterization of atrial arrhythmias in body surface potential mapping: A computational study. COMPUTERS IN BIOLOGY AND MEDICINE, v. 127, p. 103904, 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        journal: 'ALMEIDA, T. P. ; SORIANO, D. C. ; MASE, M. ; RAVELLI, F. ; LI, X. ; CHU, G. ; Salinet, J. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; Ng, G Andre ; YONEYAMA, T. . Unsupervised Classification of Atrial Electrograms for Electroanatomic Mapping of Human Persistent Atrial Fibrillation. IEEE TRANSACTIONS ON BIOMEDICAL ENGINEERING, v. 68, p. 1131-1141, 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        journal: 'LI, XIN ; ALMEIDA, T. P. ; DASTAGIR, N. ; GUILLEM, M. S. ; Salinet, J. ; CHU, G. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; Ng, G Andre . Standardizing Single-Frame Phase Singularity Identification Algorithms and Parameters in Phase Mapping During Human Atrial Fibrillation. Frontiers in Physiology, v. 11, p. 1-19, 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        journal: 'VANHEUSDEN, F. J. ; CHU, GAVIN S. ; LI, XIN ; SALINET, J. L. ; ALMEIDA, T. P. ; DASTAGIR, N. ; STAFFORD, P. J. ; NG, G. ANDRÉ ; SCHLINDWEIN, FERNANDO S. . Systematic differences of non-invasive dominant frequency estimation compared to invasive dominant frequency estimation in atrial fibrillation. COMPUTERS IN BIOLOGY AND MEDICINE, v. 104, p. 299-309, 2019.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        journal: 'ALMEIDA, T. P. ; CHU, G. ; BELL, M. J. ; LI, X. ; SALINET, J. L. ; DASTAGIR, N. ; TUAN, JIUN H. ; STAFFORD, P. ; Ng, G Andre ; SCHLINDWEIN, F. S. . The temporal behavior and consistency of bipolar atrial electrograms in human persistent atrial fibrillation. MEDICAL & BIOLOGICAL ENGINEERING & COMPUTING, v. 56, p. 71-83, 2018.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        journal: 'ALMEIDA, T. P. ; SCHLINDWEIN, F. S. ; SALINET, J. L. ; LI, X. ; CHU, G. ; TUAN, JIUN H. ; STAFFORD, P. ; Ng, G Andre ; SORIANO, D. C. . Characterization of human persistent atrial fibrillation electrograms using recurrence quantification analysis. CHAOS, v. 28, p. 085710, 2018.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        journal: 'ALMEIDA, T. P. ; SCHLINDWEIN, F. S. ; SALINET, J. L. ; LI, XIN ; CHU, GAVIN S. ; TUAN, JIUN H. ; STAFFORD, PETER J. ; Ng, G Andre ; SORIANO, D. C. . The temporal stability of recurrence quantification analysis attributes from chronic atrial fibrillation electrograms. RESEARCH ON BIOMEDICAL ENGINEERING, v. 34, p. 337-349, 2018.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        journal: 'LI, X. ; SALINET, J. L. ; ALMEIDA, T. P. ; VANHEUSDEN, F. J. ; CHU, G. ; NG, G. A. ; SCHLINDWEIN, F. S. . An interactive platform to guide catheter ablation in human persistent atrial fibrillation using dominant frequency, organization and phase mapping. COMPUTER METHODS AND PROGRAMS IN BIOMEDICINE, v. 141, p. 83-92, 2017.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        journal: 'SALINET, J. L.; SCHLINDWEIN, F. S. ; STAFFORD, P. ; ALMEIDA, T. P. ; XIN, L. ; VANHEUSDEN, F. J. ; GUILLEM, M. S. ; NG, G. A. . Propagation of Meandering Rotors Surrounded by High Dominant Frequency Areas in Persistent Atrial Fibrillation. HEART RHYTHM, v. 14, p. 1269-1278, 2017.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2016',
        journal: 'A, T. P. ; CHU, G. ; SALINET, J. L. ; VANHEUSDEN, F. J. ; LI, X. ; TUAN, J. H. ; STAFFORD, P. ; NG, G. A. ; SCHLINDWEIN, F. S. Minimizing discordances in automated classification of fractionated electrograms in human persistent atrial fibrillation. Medical & Biological Engineering & Computing, v. 54, p. 1695-1706, 2016.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2016',
        journal: 'SALINET, J. L.; MASCA, N. ; STAFFORD, P. J. ; NG, G. ANDRÉ ; SCHLINDWEIN, F. S. . Three-dimensional dominant frequency mapping using autoregressive spectral analysis of atrial electrograms of patients in persistent atrial fibrillation. Biomedical Engineering Online, v. 15, p. 28-15-28, 2016.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        journal: 'SALINET, J. L.; TUAN, J. H. ; SANDILANDS, A. J. ; STAFFORD, P. J. ; SCHLINDWEIN, F. S. ; ANDRÉ NG, G. Distinctive Patterns of Dominant Frequency Trajectory Behavior in Drug-Refractory Persistent Atrial Fibrillation: Preliminary Characterization of Spatiotemporal Instability. Journal of Cardiovascular Electrophysiology (Print), v. 25, p. 371-379, 2014.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2013',
        journal: 'SALINET, J. L.; OLIVEIRA, G. N. ; VANHEUSDEN, F. J. ; COMBA, J. L. D. ; NG, G. A. ; SCHLINDWEIN, F. S. Visualization of Intracardiac Atrial Electrograms of Patients with Atrial Fibrillation using Spectral Analysis. COMPUTING IN SCIENCE & ENGINEERING, v. 15, p. 79-87, 2013.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2013',
        journal: 'SALINET, J. L.; MADEIRO, J. P. V. ; CORTEZ, P. C. ; STAFFORD, P. J. ; ANDRÉ NG, G. ; SCHLINDWEIN, F. S. Analysis of QRS-T subtraction in unipolar atrial fibrillation electrograms. MEDICAL & BIOLOGICAL ENGINEERING & COMPUTING, v. 1, p. 1-11, 2013.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2011',
        journal: 'AHMAD, A. ; SALINET, J. L. ; BROWN, P. ; TUAN, J. H. ; STAFFORD, P. ; NG, G. ANDRE ; SCHLINDWEIN, F. S. QRS subtraction for atrial electrograms: flat, linear and spline interpolations.  Medical & Biological Engineering & Computing, v. 49, p. 1321-1328, 2011.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('journals', journals, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('journals', null, {});
  }
};