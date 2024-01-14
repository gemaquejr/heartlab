'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const conferences = [
      {
        age: '2021',
        conference: 'Salinet, J.; MOURA, F. S. ; COSTA, R. R. ; SANTOS, P. M. N. ; PANERAI, R. ; DUARTE, A. M. ; BOR-SENG-SHU, E. ; SALINET, A. S. M. . Open Source Platform for Cerebral Autoregulation Assessment (CAAos platform): Platform Configuration and Method Validation. In: 10th international meeting on Cerebral Haemodynamic Regulation, 2021, Shenzhen.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2021',
        conference: 'COSTA, G. V. ; CESTARI, I. A. ; Salinet, J. . Propagação da atividade elétrica cardíaca: uma contribuição computacional e experimental. In: IV Workshop de Inovação em Engenharia Biomédica (IV WIEB), 2021, São José dos Campos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2021',
        conference: 'RESTIVO, C. R. ; CAMARGO, E. D. L. B. ; CESTARI, I. A. ; Salinet, J. . Sistema de mapeamento eletrocardiográfico de superfície: metodologia de otimização. In: IV Workshop de Inovação em Engenharia Biomédica (IV WIEB), 2021, São José dos Campos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'FERNANDES, R. ; PAREDES, J. G. S. ; Salinet, J. . Detection and Classification of Cardiac Arrhythmias by Machine Learning: A systematic review. In: 47th Computing in Cardiology (CinC), 2020, Rimini. 47th Computing in Cardiology (CinC), 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'PAREDES, J. G. S. ; POLLNOW, S. ; DOSSEL, O. ; Salinet, J. . The influence of cardiac ablation on the electrophysiological characterization of rat isolated atrium: preliminary analysis.. In: 47th Computing in Cardiology (CinC), 2020. 47th Computing in Cardiology (CinC), 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; Salinet, J. . A wavelet-based method for non-invasive dominant frequency detection in atrial fibrillation. In: 47th Computing in Cardiology (CinC), 2020. 47th Computing in Cardiology (CinC), 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; Salinet, J. . Classification and Location of Atrial Arrhythmic Mechanisms with Body Surface Potential Mapping. In: 47th Computing in Cardiology (CinC), 2020, Rimini. 47th Computing in Cardiology (CinC), 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'DUARTE, A. M. ; COSTA, R. R. ; MOURA, F. S. ; SALINET, A. S. M. ; Salinet, J. . Evaluation and Systematization of the Transfer Function Method for Cerebral Autoregulation Assessment. In: XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020. p. 888-893.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'SANTOS, P. M. N. ; Salinet, J. ; MOURA, F. S. ; BOR-SENG-SHU, E. ; SALINET, A. S. M. . Cerebral Autoregulation Open Source Multiplatform: CAAos platform. In: XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020. p. 1407-1412.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'SANTOS, R. ; MCINNIS, M. ; Salinet, J. . Diagnostic and Monitoring of Atrial Fibrillation using Wearable Devices: a Scoping Review. In: XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'PAREDES, J. G. S. ; POLLNOW, S. ; UZELAC, I. ; DOSSEL, O. ; Salinet, J. . The Influence of Cardiac Ablation on the Electrophysiological Characterization of Rat Isolated Atrium: Preliminary Analysis. In: XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'FERNANDES, R. ; PAREDES, J. G. S. ; Salinet, J. . Integrative Review of Artificial Intelligence Methods Applied to the Classification of Cardiac Arrhythmia.. In: XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020. p. 941-946.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; Salinet, J. . Classification of atrial arrhythmic mechanism and their location in body surface potential mapping. In: XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; Salinet, J. . Dominant frequency detection in body surface potential mapping undergoing atrial fibrillation using continuous wavelet transform. In: XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020. p. 1472-1475.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'DUARTE, A. M. ; COSTA, R. R. ; MOURA, F. S. ; SALINET, A. S. M. ; Salinet, J. . Evaluation and Systematization of the Autoregulation Index for Cerebral Autoregulation Assessment: preliminary study analysis. In: XXVII edição do Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020. p. 894-895.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2020',
        conference: 'PAREDES, J. G. S. ; POLLNOW, S. ; UZELAC, I. ; DOSSEL, O. ; Salinet, J. . 50% Criteria as an alternative to the first derivative to nd the optical activation time after radiofrequency ablation. In: XXVII edição do Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020, Vitória. XXVII Congresso Brasileiro de Engenharia Biomédica (CBEB 2020), 2020. p. 1876-1877.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'SALINET, JOÃO; PAREDES, J. G. S. ; MAZZETO, M. ; MARQUES, V. G. ; SAMESIMA, N. ; PASTORE, C. A. ; CESTARI, I. A. . Non-Invasive Characterization of Cardiac Activation Patterns: Contributions of Body Surface Potential Mapping in Healthy Volunteers. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; SALINET, JOÃO . Non-invasive Characterization of Atrial Arrhythmic Driving Mechanisms in Computer Models. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; SALINET, JOÃO . Effect of Reducing the Number of Leads in Body Surface Potential Mapping of Computer Models of Atrial Arrhythmias. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'VANHEUSDEN, F. J. ; CHU, G. ; LI, X. ; SALINET, JOÃO ; STAFFORD, P. ; Ng, G Andre ; SCHLINDWEIN, F. S. . Are atrial fibrillation highest dominant frequency (HDF) areas the source of dominant excitation patterns? A left atrial panoramic view. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'MADEIRO, J. P. V. ; BARRETO, D. ; MARQUES, J. A. L. ; SALINET, JOÃO . Evaluating Mathematical Models for Morphological Classification of the QRS Complex. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'SILVA, D. P. ; WATANABE, W. T. ; LOPES, W. S. ; RODRIGUES, H. ; RODRIGUES, R. ; SALINET, JOÃO ; BISSACO, M. A. S. ; GOROSO, G. . Monitoring remote of biomedical signals. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'WATANABE, W. T. ; SILVA, D. P. ; LOPES, W. S. ; RODRIGUES, H. ; RODRIGUES, R. ; SALINET, JOÃO ; BISSACO, M. A. S. ; GOROSO, G. . Monitoring remote of heart rate variability: arrhythmia detection. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'SIMS, J. ; SALINET, JOÃO ; GUTIERREZ, M. . Directional Analysis of 2D Cardiac Motion Slices Using the Discrete Helmholtz Hodge Decomposition. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'SIMS, J. ; CASTALDONI, R. ; SALINET, JOÃO ; ASSUNCAO-JR, A. N. ; ARAUJO-FILHO, J. A. ; VICTOR, R. ; MORAES, T. ; LEMOS, A. P. ; TARASSOUTI, F. ; VIEIRA, M. ; NOMURA, C. H. . Statistical and Image Processing Tools for Predicting Severity of Calcific Degenerative Aortic Valve Stenosis. In: 46th Computing in Cardiology (CinC) Conference, 2019, Cingapura.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'LI, X. ; CHU, G. ; ALMEIDA, T. P. ; Salinet, J. ; MISTRY, A. R. ; VALI, Z. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; Ng, G Andre . Machine learning classifiers for predicting catheter ablation responses using non-contact electrograms during persistent atrial fibrillation. In: European Heart Rhythm Association 2019 (EHRA 2019), 2019, Lisbon. EP Europace, 2019. v. 21.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'Salinet, J.; MOURA, F. S. ; SANTOS, P. M. N. ; BOR-SENG-SHU, E. ; SALINET, A. S. M. . Plataforma de Avaliação de Autorregulação Cerebral. In: XII SIMPÓSIO DE ENGENHARIA BIOMÉDICA E IX SIMPÓSIO DE INSTRUMENTAÇÃO E IMAGENS MÉDICAS, 2019, Uberlândia.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'FIRMINO, J. V. P. ; Salinet, J. ; MOURA, F. S. ; PANERAI, R. ; SALINET, A. S. M. . Índice de Autorregulação Cerebral pelo método Autorregressivo com Média Móvel: resultados preliminares. In: XII SIMPÓSIO DE ENGENHARIA BIOMÉDICA E IX SIMPÓSIO DE INSTRUMENTAÇÃO E IMAGENS MÉDICAS, 2019, Uberlândia.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; Salinet, J. . Effects of Body Surface Potential Mapping Lead Layouts in the Analysis of Atrial Signals. In: XII SIMPÓSIO DE ENGENHARIA BIOMÉDICA E IX SIMPÓSIO DE INSTRUMENTAÇÃO E IMAGENS MÉDICAS, 2019, Uberlândia.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; Salinet, J. . Characterization of Atrial Arrhythmic Mechanisms in Body Surface Potential Mapping Computer Models. In: XII SIMPÓSIO DE ENGENHARIA BIOMÉDICA E IX SIMPÓSIO DE INSTRUMENTAÇÃO E IMAGENS MÉDICAS, 2019, Uberlândia.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2019',
        conference: 'SALINET, JOÃO; MOURA, F. S. ; SANTOS, P. M. N. ; BOR-SENG-SHU, E. ; SALINET, A. S. M. . Cerebral Autoregulation Open Source Multiplatform: A Preliminary Validation. In: 9th International Meeting on Cerebral Haemodynamic Regulation (CARNet meeting), 2019, Leuven, Bélgica.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('conferences', conferences, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('conferences', null, {});
  }
};