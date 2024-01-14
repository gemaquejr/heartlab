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
    ];

    return queryInterface.bulkInsert('conferences', conferences, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('conferences', null, {});
  }
};