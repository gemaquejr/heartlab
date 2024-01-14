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
      {
        age: '2018',
        conference: 'DUARTE, A. M. ; SALINET, JOÃO L. ; MIDORIKAWA, K. C. ; AZEVEDO, D. ; SALINET, A. S. M. . Implementing, validating and comparing the transfer function method for cerebral autoregulation analysis. In: 8th international meeting on Cerebral Haemodynamic Regulation (CARNet meeting), 2018, Oxford, UK.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        conference: 'DUARTE, A. M. ; SALINET, A. S. M. ; MIDORIKAWA, K. C. ; AZEVEDO, D. ; Salinet, J. . Implementing transfer function analysis method and autoregulation index to assess cerebral autoregulation: a preliminary study. In: XXVI Congresso Brasileiro de Engenharia Biomédica, 2018, Búzios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        conference: 'SILVA, B. F. G. ; TONG, B. G. C. ; SOUZA, P. D. S. ; Salinet, J. . IEEE Engineering in Medicine and Biology Society Student Chapter at UFABC: student opportunities and contributions. In: XXVI Congresso Brasileiro de Engenharia Biomédica, 2018, Búzios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        conference: 'Salinet, J.; MARQUES, V. G. ; MAZZETO, M. ; CAMARGO, E. D. L. B. ; PASTORE, C. A. ; CESTARI, I. A. . Preliminary Validation of a 64-lead Body Surface Potential Mapping on Healthy Volunteers. In: XXVI Congresso Brasileiro de Engenharia Biomédica, 2018, Búzios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        conference: 'MICHESKI, P. ; PAREDES, J. G. S. ; Salinet, J. . Product Certification Body versus Demand of Electro-medical Devices: the Brazilian scenario, limitations, disparity and opportunities. In: XXVI Congresso Brasileiro de Engenharia Biomédica, 2018.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        conference: 'TREVIZAN, T. ; LI, X. ; SCHLINDWEIN, F. S. ; STAFFORD, P. J. ; Ng, G Andre ; Salinet, J. . Atrial fibrillation patterns are pre-processing method-based dependent. In: XXVI Congresso Brasileiro de Engenharia Biomédica, 2018, Búzios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        conference: 'BEZERRA, A. S. ; ALMEIDA, T. P. ; MASE, M. ; RAVELLI, F. ; LI, X. ; CHU, G. ; Salinet, J. ; SORIANO, D. C. ; SCHLINDWEIN, FERNANDO S. ; TUAN, J. H. ; STAFFORD, P. J. ; YONEYAMA, T. . Time and frequency domain similarities of atrial activations during chronic atrial fibrillation. In: XXVI Congresso Brasileiro de Engenharia Biomédica, 2018.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2018',
        conference: 'MARQUES, V. G. ; RODRIGO, M. ; GUILLEM, M. S. ; Salinet, J. . Preliminary Characterization of Atrial Arrhythmia Mechanisms on Body Surface Potential Mapping. In: XXVI Congresso Brasileiro de Engenharia Biomédica, 2018, Búzios.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'Salinet, J. L.; SCHLINDWEIN, F. S. ; STAFFORD, P. ; ALMEIDA, T. P. ; VANHEUSDEN, F. J. ; GUILLEM, M. S. ; Ng, G Andre . Persistent Atrial Fibrillation Hierarchical Activation: from Highest DF Sites to Wave Fractionation at the Boundaries. In: 44th annual scientific meeting of Computing in Cardiology (CinC), 2017, Rennes.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'PANICO, K. ; WEBER, G. ; RAMOS, M. S. C. ; Salinet, J. L. . Electrophysiological Effects on Renal Ischaemia/Reperfusion-Induced Cardiac Hypertrophy. In: 44th annual scientific meeting of Computing in Cardiology (CinC), 2017, Rennes.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'Salinet, J. L.; MARQUES, V. G. ; MAZZETO, M. ; CAMARGO, E. D. L. B. ; PASTORE, C. A. ; CESTARI, I. A. . A 64-lead Body Surface Potential Mapping System. In: 44th annual scientific meeting of Computing in Cardiology (CinC), 2017, Rennes.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'ALMEIDA, T. P. ; SCHLINDWEIN, F. S. ; Salinet, J. L. ; XIN, L. ; CHU, G. ; TUAN, J. H. ; STAFFORD, P. ; Ng, G Andre ; SORIANO, D. C. . Deterministic structures in fractionated atrial electro-grams during human persistent atrial fibrillation. In: 44th annual scientific meeting of Computing in Cardiology (CinC), 2017, Rennes.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'Salinet, J.; MARQUES, V. G. ; MAZZETO, M. ; CAMARGO, E. D. L. B. ; PASTORE, C. A. ; CESTARI, I. A. . Development of Body Surface Mapping Equipment for Guiding Cardiac Arrhythmias Diagnoses and Treatments. In: 8º Simpósio de Instrumentação e Imagens Médicas (SIIM) e o 7º Simpósio de Processamento de Sinais (SPS), 2017, São Bernardo do Campo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'ALMEIDA, T. P. ; SCHLINDWEIN, F. S. ; Salinet, J. ; LI, X. ; CHU, G. ; TUAN, JIUN H. ; STAFFORD, P. ; ANDRÉ NG, G. ; SORIANO, D. C. . Estabilidade temporal dos atributos de recorrência em eletrogramas atriais provenientes de pacientes com fibrilação atrial crônica. In: 8º Simpósio de Instrumentação e Imagens Médicas (SIIM) e o 7º Simpósio de Processamento de Sinais (SPS), 2017, São Bernardo do Campo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'RUIZ, R. ; OLIVEIRA, H. J. Q. ; Salinet, J. ; ECHEIMBERG, J. ; BISSACO, M. . Impacto do WhatsApp e Google Hangouts sobre a qualidade das imagens médicas transmitidas. In: 8º Simpósio de Instrumentação e Imagens Médicas (SIIM) e o 7º Simpósio de Processamento de Sinais (SPS), 2017, São Bernardo do Campo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'ALMEIDA, T. P. ; SCHLINDWEIN, F. S. ; Salinet, J. L. ; LI, X. ; CHU, G. ; TUAN, J. H. ; STAFFORD, P. ; Ng, G Andre ; SORIANO, D. C. . Recurrence quantification analysis for characterizing atrial electrogram fractionation in human chronic atrial fibrillation. In: 7th International Symposium on Recurrence Plots, 2017, São Paulo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'PEREIRA, V. C. ; CAMARGO, E. D. L. B. ; Salinet, J. L. ; SORIANO, D. C. . Recurrence quantification analysis in real time in Labview: simulated ECG evaluation. In: 7th International Symposium on Recurrence Plots, 2017, São Paulo. 7th International Symposium on Recurrence Plots, 2017.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'TREVIZAN, T. ; Salinet, J. . Análise de Mapas Eletrofisiológicos Utilizados no Tratamento de Pacientes com Fibrilação Atrial. In: 8º Simpósio de Instrumentação e Imagens Médicas (SIIM) e o 7º Simpósio de Processamento de Sinais (SPS), São Bernardo do Campo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'YOSHIDA, L. A. ; SALINET, A. S. M. ; Salinet, J. . Sincronização do fluxo sanguíneo cerebral e pressão arterial para cálculo de autorregulação cerebral. In: 8º Simpósio de Instrumentação e Imagens Médicas (SIIM) e o 7º Simpósio de Processamento de Sinais (SPS), 2017, São Bernardo do Campo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'LI, X. ; CHU, G. ; ALMEIDA, T. P. ; Salinet, J. L. ; DASTAGIR, N. ; VANHEUSDEN, F. J. ; MISTRY, A. R. ; VALI, Z. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; Ng, G Andre . Improving target identification of persistent atrial fibrillation ablation using simultaneous intracardiac mapping. In: Heart Rhythm Congress, 2017, Birmingham. EP Europace, 2017. v. 19. p. i14-i14.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2017',
        conference: 'LI, X. ; CHU, G. ; ALMEIDA, T. P. ; Salinet, J. L. ; DASTAGIR, N. ; MISTRY, A. R. ; VALI, Z. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; Ng, G Andre . Characteristics of ablated rotors in terminating persistent atrial fibrillation using non-contact mapping. In: Heart Rhythm Congress, 2017, Birmingham. EP Europace, 2017. v. 19. p. i3-i3.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2016',
        conference: 'ALMEIDA, T. P. ; CHU, G. ; LI, X. ; Salinet, J. L. ; DASTAGIR, N. ; BELL, M. J. ; VANHEUSDEN, F. J. ; TUAN, J. H. ; STAFFORD, P. J. ; NG, G. ANDRÉ ; SCHLINDWEIN, F. S. . Contributing Factors Concerning Inconsistencies in Persistent Atrial Fibrillation Ablation Outcomes. In: Computers in Cardiology (Computing in Cardiology), 2016, Vancouver. Computers in Cardiology (CinC), 2016. v. 1. p. 1.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2016',
        conference: 'Salinet, J. L.; CAMARGO, E. D. L. B. ; MENEGHINI, C. E. B. ; CESTARI, I. A. . Plataforma para mapeamento de biopotenciais do torso em alta densidade. In: XXV Congresso Brasileiro de Engenharia Biomédica (CBEB 2016), 2016, Foz do Iguaçu. Anais do XXV Congresso Brasileiro de Engenharia Biomédica (CBEB 2016), 2016. p. 1678-1682.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2016',
        conference: 'ALMEIDA, T. P. ; CHU, G. ; BELL, M. J. ; LI, X. ; Salinet, J. L. ; DASTAGIR, N. ; TUAN, JIUN H. ; STAFFORD, P. J. ; NG, G. ANDRÉ ; SCHLINDWEIN, F. S. . The spatio-temporal behavior of atrial electrogram fractionation in persistent atrial fibrillation. In: XXV Congresso Brasileiro de Engenharia Biomédica (CBEB 2016), 2016, Foz do Iguaçu. Anais do XXV edição do Congresso Brasileiro de Engenharia Biomédica (CBEB 2016), 2016. v. 1. p. 1674-1677.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2016',
        conference: 'PEREIRA, V. C. ; CAMARGO, E. D. L. B. ; Salinet, J. L. ; SORIANO, D. C. . Análise por quantificação de recorrência em tempo de execução utilizando LABVIEW: caracterização do ECG. In: XXV Congresso Brasileiro de Engenharia Biomédica (CBEB 2016), 2016, Foz do Iguaçu. Anais do XXV edição do Congresso Brasileiro de Engenharia Biomédica (CBEB 2016), 2016. v. 1. p. 1686-1689.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'Salinet, J. L.; GUILLEM, M. S. ; ALMEIDA, T. P. ; XIN, L. ; GOROSO, G. ; CHU, G. ; NG, G.A ; SCHLINDWEIN, F. S. . Drifting rotors prevalence is associated with dominant frequency reduction after persistent atrial fibrillation ablation. In: Computing in Cardiology, 2015, Nice.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'ALMEIDA, T. P.; CHU, G. ; Salinet, J. L. ; VANHEUSDEN, F. J. ; LI, X. ; TUAN, J. H. ; STAFFORD, P. J. ; NG, G. A. ; SCHLINDWEIN, F. S. . Unifying automated fractionated atrial electrograms classification using electroanatomical mapping systems in persistent atrial fibrillation studies. In: Computing in Cardiology, 2015, Nice.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'LI, X. ; CHU, G. ; ALMEIDA, T. P. ; VANHEUSDEN, F. J. ; DASTAGIR, N. ; Salinet, J. L. ; STAFFORD, P. J. ; NG, G. A. ; SCHLINDWEIN, F. S. . Investigation on Recurrent High Dominant Frequency Spatiotemporal Patterns during Persistent Atrial Fibrillation. In: Computing in Cardiology, 2015, Nice.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'DASTAGIR, N. ; LI, X. ; VANHEUSDEN, F. J. ; ALMEIDA, T. P. ; Salinet, J. L. ; CHU, G. ; STAFFORD, P. J. ; NG, G.A ; SCHLINDWEIN, F. S. . Combination of frequency and phase to characterize the spatiotemporal behaviour of cardiac waves during persistent atrial fibrillation. In: Computing in Cardiology, 2015, Nice.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'Freitas, E. B. ; Salinet, J. L. ; OLIVEIRA, H. J. Q. . A novel method for automatic standardization of digital electrocardiographs. In: Computing in Cardiology, 2015, Nice.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'DASTAGIR, N. ; LI, X. ; ALMEIDA, T. P. ; VANHEUSDEN, FREDERIQUE JOS ; SALINET, JOÃO ; CHU, G. ; STAFFORD, P. ; Ng, G Andre ; SCHLINDWEIN, F. S. . Effect of Filtering Atrial Electrograms on the Relationship of Phase and Dominant Frequency. In: Atrial Signals, 2015, Karlsruhe. Atrial Signals, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'SCHLINDWEIN, F. S. ; CHU, G. ; ALMEIDA, T. P. ; LI, X. ; DASTAGIR, N. ; VANHEUSDEN, F. J. ; Salinet, J. L. ; STAFFORD, P. J. ; NG, G.A . Frequency, phase and fractionation of atrial electrograms help guide AF ablation. In: Atrial Signals 2015, 2015, Karlsruhe. Atrial Signals, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'Salinet, J. L.; GUILLEM, M. S. ; ALMEIDA, T. P. ; XIN, L. ; CHU, G. ; VANHEUSDEN, F. J. ; DASTAGIR, N. ; NG, G.A ; SCHLINDWEIN, F. S. . Co-localised Drifting Rotors and Frequency Activity Followed by Activity Reduction after Persistent Atrial Fibrillation ablation. In: Atrial Signals 2015, 2015, Karlsruhe. Atrial Signals, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'ALMEIDA, T. P. ; CHU, G. ; Salinet, J. L. ; VANHEUSDEN, F. J. ; LI, X. ; DASTAGIR, N. ; TUAN, J. H. ; STAFFORD, P. J. ; NG, G.A ; SCHLINDWEIN, F. S. . Targeting Complex Fractionated Atrial Electrograms During Persistent Atrial Fibrillation Ablation: but which ones?. In: Atrial Signals 2015, 2015, Karlsruhe. Atrial Signals, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'XIN, L. ; CHU, G. ; ALMEIDA, T. P. ; VANHEUSDEN, F. J. ; Salinet, J. L. ; STAFFORD, P. J. ; NG, G.A ; SCHLINDWEIN, F. S. . Recurrent High Dominant Frequency Spatial Patterns in Atrial Fibrillation. In: Atrial Signals 2015, 2015, Karlsruhe. Atrial Signals, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'CHU, G. ; LI, X. ; VANHEUSDEN, F. J. ; ALMEIDA, T. P. ; Salinet, J. L. ; DASTAGIR, N. ; VARANASI, S. S. ; CHIN, S. H. ; SIDDIQUI, S. ; MAN, S. H. ; STAFFORD, P. ; SANDILANDS, A. J. ; SCHLINDWEIN, F. S. ; NG, G. A. . Cyclical Regions of Highest Dominant Frequency are Feasible Targets for Ablation in Persistent Atrial Fibrillation. In: American Heart Association (AHA) Scientific Sessions 2015, 2015, Orlando, Flórida. American Heart Association (AHA) Scientific Sessions 2015, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'ALMEIDA, T. P. ; CHU, G. ; Salinet, J. L. ; VANHEUSDEN, F. J. ; LI, X. ; TUAN, JIUN H. ; STAFFORD, P. ; NG, G. A. ; SCHLINDWEIN, F. S. . Differences in Fractionated Electrogram Detection: a Direct Quantitative Comparison Between Navx And Carto. In: Heart Rhythm Congress (HRC), 2015, Birmingham, UK. Europace EP, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'LI, X. ; CHU, G. ; ALMEIDA, T. P. ; VANHEUSDEN, F. J. ; DASTAGIR, N. ; Salinet, J. L. ; STAFFORD, P. ; NG, G. A. ; SCHLINDWEIN, F. S. . Recurrent High Dominant Frequency Patterns in Persistent Atrial Fibrillation. In: Heart Rhythm Congress (HRC), 2015, Birmingham, UK. Europace EP, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'DASTAGIR, N. ; Salinet, J. L. ; LI, X. ; VANHEUSDEN, F. J. ; ALMEIDA, T. P. ; CHU, G. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; NG, G. A. . Relationship of Phase Singularities and High Dominant Frequency Regions during Persistent Atrial Fibrillation in Humans. In: Heart Rhythm Congress (HRC), 2015, Birmingham, UK. Europace EP, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'CHU, G. ; LI, X. ; VANHEUSDEN, F. J. ; ALMEIDA, T. P. ; Salinet, J. L. ; DASTAGIR, N. ; VARANASI, S. S. ; CHIN, S. H. ; Siddiqui, M. S. ; MAN, S. H. ; STAFFORD, P. ; SANDILANDS, A. J. ; SCHLINDWEIN, F. S. ; NG, G. A. . Targeting Cyclical Highest Dominant Frequency in the Ablation of Persistent Atrial Fibrillation. In: Heart Rhythm Congress (HRC), 2015, Birmingham, UK. Europace EP, 2015.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2015',
        conference: 'DASTAGIR, N. ; VANHEUSDEN, F. J. ; CHU, G. ; Salinet, J. L. ; LI, X. ; ALMEIDA, T. P. ; STAFFORD, P. J. ; SCHLINDWEIN, F. S. ; Ng, G Andre . Spatiotemporal Analysis of Phase and Frequency Dynamics in Human Persistent Atrial Fibrillation. In: American Heart Association Scientific Sessions, 2015, Orlando. Circulation, 2015. v. 132. p. A15890.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'SALINET, JOÃO L.; TUAN, J. H. ; SALINET, A. S. M. ; LI, X. ; STAFFORD, P. ; NG, G. A. ; SCHLINDWEIN, F. S. . Distinctive patterns of dominant frequency trajectory behaviour in persistent atrial fibrillation: spatio-temporal characterisation. In: Computers in Cardiology (Computing in Cardiology), 2014, Cambridge, MA, USA.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'LI, X. ; SALINET, JOÃO L. ; ALMEIDA, T. P. ; VANHEUSDEN, F. J. ; CHU, G. ; NG, G. A. ; SCHLINDWEIN, F. S. . A platform to guide catheter ablation of persistent atrial fibrillation using dominant frequency mapping. In: Computers in Cardiology (Computing in Cardiology), 2014, Cambridge, MA, USA.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'DASTAGIR, N. ; SALINET, JOÃO L. ; VANHEUSDEN, F. J. ; ALMEIDA, T. P. ; LI, X. ; CHU, G. ; NG, G. A. ; SCHLINDWEIN, F. S. . Spatiotemporal behavior of high dominant frequency during persistent atrial fibrillation. In: Computers in Cardiology (Computing in Cardiology), 2014, Cambridge, MA, USA.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'Salinet, J. L.; MARQUES, J. A. ; SALINET, A. S. M. ; Ng, G Andre ; SCHLINDWEIN, F. S. . Nonlinearity Characterization and Entropy Analysis of Intracardiac Atrial Electrogram Signals. In: Congresso Brasileiro de Engenharia Biomédica, 2014, Uberlândia. Congresso Brasileiro de Engenharia Biomédica, 2014.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'Salinet, J. L.; Ng, G Andre ; SCHLINDWEIN, F. S. . Alternative Three-dimensional Frequency Mapping for Atrial Fibrillation Intracardiac Electrograms. In: 5º Simpósio de Processamento de Sinais da UNICAMP (SPS-UNICAMP’2014), 2014, Campinas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'Salinet, J. L.; Ng, G Andre ; SCHLINDWEIN, F. S. . High Density Frequency Mapping of Human Intracardiac Persistent Atrial Fibrillation Electrograms. In: 5º Simpósio de Processamento de Sinais da UNICAMP (SPS-UNICAMP’2014), 2014, Campinas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'ALMEIDA, T. P. ; CHU, G. ; VANHEUSDEN, F. J. ; LI, X. ; Salinet, J. L. ; TUAN, J. H. ; STAFFORD, P. J. ; SCHLINDWEIN, F. S. ; Ng, G Andre . Investigating differences in complex fractionated atrial electrogram discrimination as performed by CARTO and NavX algorithms. In: Heart Rhythm Congress, 2014, Birmingham. EP Europace, 2014.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'DASTAGIR, N. ; CHU, G. ; VANHEUSDEN, F. J. ; Salinet, J. L. ; ALMEIDA, T. P. ; LI, X. ; STAFFORD, P. J. ; SCHLINDWEIN, F. S. ; Ng, G Andre . Ablation for Persistent atrial fibrillation shrinks left atrial high dominant frequency areas. In: Heart Rhythm Congress, 2014, Birmingham. EP Europace: Heart Rhythm Congress Proceedings, 2014.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2014',
        conference: 'JOHN, B. ; GANESAN, A. ; Salinet, J. L. ; SANDERS, P. . Acute release of stretch directly impacts spatiotemporal dynamics in atrial fibrillation. In: Asian-Pacific Heart Rhytm Scientific Session (APHRS), 2014, Nova Delhi. 7th Asian-Pacific Heart Rhytm Scientific Session (APHRS), 2014.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2013',
        conference: 'ALMEIDA, T. P. ; SALINET JÚNIOR, J. L. ; CHU, G. ; NG, G. A. ; SCHLINDWEIN, FERNANDO S. . Different definitions of complex fractionated atrial electrograms do not concur with clinical perspective. In: Computing in Cardiology Conference (CinC), 2013, Zaragoza.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2013',
        conference: 'SALINET JÚNIOR, J. L.; TUAN, J. H. ; STAFFORD, P. J. ; SCHLINDWEIN, FERNANDO S. ; NG, G. A. . High Density Noncontact Mapping of Persistent Atrial Fibrillation: Spatiotemporal Characteristics of Dominant Frequency and Organization Index during Sequential Mapping. In: Heart Rhythm 2013: 34th Annual Scientific Sessions, 2013, Denver. Heart Rhythm. New York: ELSEVIER, 2013. v. 10. p. S1-S2.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2013',
        conference: 'ALMEIDA, T. P. ; SALINET JÚNIOR, J. L. ; CHU, G. ; TUAN, JIUN H. ; SCHLINDWEIN, FERNANDO S. ; NG, G. A. . Atrial Electrogram Complexity as an Objective Measurement of Fractionation. In: Heart Rhythm 2013: 34th Annual Scientific Sessions, 2013, Denver. Heart Rhythm. New York: ELSEVIER, 2013. v. 10. p. S2-S2.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2013',
        conference: 'ALMEIDA, T. P. ; SALINET JÚNIOR, J. L. ; CHU, G. ; SCHLINDWEIN, FERNANDO S. ; NG, G. A. . Atrial electrogram complexity as a clinical instrument for measuring temporal fractionation variability during atrial fibrillation. In: Heart Rhythm Congress, 2013, Birmingham. Europace EP. Oxford: Oxford University Press, 2013. v. 15. p. iv31-iv35.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'SALINET JÚNIOR, J. L.; STAFFORD, P. ; NG, G. A. ; SCHLINDWEIN, F. S. . Distinct Patterns in the most common clinical arrhythmia: what is the mechanism?. In: XXIII Congresso Brasileiro de Engenharia Biomédica, 2012, Porto de Galinhas. XXIII Congresso Brasileiro de Engenharia Biomédica, 2012. p. 1-6.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'SALINET JÚNIOR, J. L.; MADEIRO, J. P. V. ; MARQUES, J. A. ; CORTEZ, P. C. ; STAFFORD, P. J. ; NG, G. A. ; SCHLINDWEIN, FERNANDO S. . Removing ventricular influence from intracardiac atrial fibrillation electrograms. In: XXIII Congresso Brasileiro de Engenharia Biomédica, 2012, Porto de Galinhas. XXIII Congresso Brasileiro de Engenharia Biomédica, 2012. p. 1984-1988.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'VANHEUSDEN, F. J. ; SALINET JÚNIOR, J. L. ; NICOLSON, W. B. ; MACCANN, G. P. ; NG, G. A. ; SCHLINDWEIN, FERNANDO S. . Patient-Specific Three-dimensional Torso Models for Analysing Cardiac Activity. In: Computing in Cardiology Conference (CinC), 2012, Krakow.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'SALINET JÚNIOR, J. L.; ARUJA, J. ; Brown, P. D. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; NG, G.A . Trajectory Propagation of Dominant Frequency Areas using High Density Noncontact Mapping Reveals Distinct Behaviour in Persistent Atrial Fibrillation. In: Heart Rhythm 2012: 33rd Annual Scientific Sessions, 2012, Boston. Heart Rhythm. Maryland Heights: ELSEVIER, 2012. v. 9. p. S4-S5.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'SALINET JÚNIOR, J. L.; MARQUES, J. A. ; TUAN, J. H. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; NG, G.A . A New Approach to Identify and Measure Fractionated Atrial Electrograms. In: Heart Rhythm 2012: 33rd Annual Scientific Sessions, 2012, Boston. Heart Rhythm. Maryland Heights: ELSEVIER, 2012. v. 9. p. S365-S366.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'SALINET JÚNIOR, J. L.; TUAN, J. H. ; SANDILANDS, ALISTAIR J. ; MADEIRO, J. P. V. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; NG, G. A. . Distinctive Patterns of Dominant Frequency Trajectory Behavior exist in Persistent Atrial Fibrillation: Characterisation of Spatio-temporal Instability. In: Heart Rhythm Congress (Young Investigation Competition), 2012, Birmingham. Europace EP. Oxford: Oxford University Press, 2012. v. 14. p. iv3-iv3.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'VANHEUSDEN, F. J. ; SALINET JÚNIOR, J. L. ; NICOLSON, W. B. ; MACCANN, G. P. ; NG, G. A. ; SCHLINDWEIN, F. S. . Structured 3D Finite Element Torso Models for Cardiac Activity Analysis. In: Bioengineering Society Conference, 2012, Oxford. Bioengineering Society Conference, 2012.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'MADEIRO, J. P. V. ; CORTEZ, P. C. ; MARQUES, J. A. ; SALINET JÚNIOR, J. L. ; PEIXOTO Jr, A. A. ; SCHLINDWEIN, FERNANDO S. . A Heart Rate Variability Based Approach to Analyse Frailty in Older Adults. In: International Conference on Medical Signal & Information Processing (MEDSIP), 2012, Liverpool. MEDSIP Proceedings, 2012.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2012',
        conference: 'MARQUES, J. A. ; MADEIRO, J. P. V. ; CORTEZ, P. C. ; SALINET JÚNIOR, J. L. ; SCHLINDWEIN, FERNANDO S. . Spectrogram Analysis to Interpret Long Term Variability of Fetal Heart Rate. In: International Conference on Medical Signal & Information Processing (MEDSIP), 2012, Liverpool. MEDSIP Proceedings, 2012.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2011',
        conference: 'SALINET JÚNIOR, J. L.; BROWN, P. D. ; AHMAD, A. ; TUAN, J. H. ; STAFFORD, P. ; SCHLINDWEIN, F. S. ; NG, G. A. . High Density Noncontact Frequency Mapping Reveals Distinct Dominant Frequency Behaviour in Persistent Atrial Fibrillation. In: Heart Rhythm 2011: 32nd Annual Scientific Session, 2011, San Francisco. Heart Rhythm. New York: Elsevier, 2011. v. 8. p. S146-S146.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        age: '2011',
        conference: 'SALINET JÚNIOR, J. L.; BROWN, P. D. ; P.D., LOHIYA ; BIDDER, S. J. ; STAFFORD, PETER J. ; SCHLINDWEIN, FERNANDO S. ; NG, G. A. . Evidence for cyclic temporal variability from high-frequency re-entrant circuits in persistent atrial fibrillation. In: Heart Rhythm Congress, 2011, Birmingham. Europace. Oxford: Oxford University Press, 2011. v. 13. p. iv20-iv24.',
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