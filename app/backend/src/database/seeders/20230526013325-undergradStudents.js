'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const undergrad = [
      {
        undergrad_photo: 'isabella-rizzi-rios.png',
        undergrad_name: 'Isabella Rizzi Rios',
        undergrad_resume: 'My research is mainly motivated by the search for a non-invasive method to identify cardiac arrhythmias, whose project emphasis is on atrial fibrillation. Therefore, this research is contextualized in the iECG project, a tool that allows estimating electrical activity in the heart in a non-invasive way. I am responsible for the segmentation of 3D morphology from medical images, generating surfaces and meshes that serve as a basis for the study of the direct and inverse solution of electrocardiography. Hobbies: reading, sports, dance, arts, traveling. Scholarship: Programa Pesquisando Desde o Primeiro Dia (PDPD) – UFABC.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
        undergrad_photo: 'maria-eduarda-tramontina-antunes.png',
        undergrad_name: 'Maria Eduarda Tramontina Antunes',
        undergrad_resume: 'My participation in the group is as a student of Scientific Initiation in the area of cardiac arrhythmias and the understanding of atrial electrical activity propagation focused on atrial fibrillation. Atrial Fibrillation (AF) is one of the most common forms of arrhythmia , and, although there are clinical researches, mathematical models, and other technologies available, the mechanism of the AF is still not entirely understood. My project is related to that. Using the openCARP software and its python framework – carputils – the goal is to run some simulations using pre-existing mathematical/computational models, such as Countermanche’s; firstly simulating healthy hearts, then introducing some irregularities, in order to better understand the propagation of atrial electrical activity. Education: Undergraduate student at Federal University of ABC (UFABC) – Bachelor in Science and Technology and Biomedical Engineering. Hobbies: music and musical instruments, sports, traveling, books, series and movies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        undergrad_photo: 'matheus-oliveira-zamai.png',
        undergrad_name: 'Matheus Oliveira Zamai',
        undergrad_resume: 'Although brain is the most responsible for the human living, this organ also is the most sensible one, which, to keep its functioning and health, has specifics amount of nutrients, blood flow, and pressure. One particular physiological mechanism to maintain these characteristics is the Cerebral Autoregulation (CA), which controls the cerebral blood flow (CBF) once there is a variation of the arterial blood pressure (ABP) due to activities as physical exercises or sleeping. To analyze the CA, techniques such as Transfer Function Analysis (TFA) and Autoregulation Index (ARI) are mathematical and processing signals methods to quantify how is the CA of a health or neurological subjects. My research is to study the CA through the platform CAAos (Cerebral Autoregulation Assessment Open Source) by applying a new method in the software. The Mx method is a mathematical technique which is commonly used in the scientific community and it has the function to evaluate the CA through the data of CBF velocity and ABP means, resulting an index that indicates how well is the subjects’ CA. Hoobies: Movies, Gym, Reading and Arts. Education: Undergraduate student at Federal University of ABC (UFABC) of Bachelor in Science and Technology and Biomedical Engineering.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        undergrad_photo: 'lucas-borges-raouda.png',
        undergrad_name: 'Lucas Borges Raouda',
        undergrad_resume: 'I’m participating in the group as a student of Scientific Initiation. I study the hemodynamics in the appendage located in the left atrium (LA) within a heart, during atrial fibrillation (AF) condition, a type of arrhythmia, where the atrium doesn’t contract properly, resulting in a poor blood flow that can stagnate, contributing to thrombogenesis. In my research, I mainly work with Computational Aided Design (CAD) to generate the geometry of the patient’s heart, and Computational Fluid Dynamics (CFD) to simulate the blood flow through a patient’s LA with AF and without AF, so I can compare both results and analyze parameters such as velocity, wall shear stress, strain rate, and others. Hobbies: football, video games, books, and learning new stuff (especially when it is related to fluid mechanics). Education: Undergraduate student at Federal University of ABC (UFABC) – Bachelor in Science and Technology and Biomedical Engineering.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        undergrad_photo: 'pedro-sergio-andreotti-nabarrete.png',
        undergrad_name: 'Pedro Sergio Andreotti Nabarrete',
        undergrad_resume: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        undergrad_photo: 'fernanda-rossi-barboza.png',
        undergrad_name: 'Fernanda Rossi Barboza',
        undergrad_resume: 'My participation in the group is as a student of Researching From the First Day (PDPD). My contribution to the group is aimed at the production of scientific dissemination materials with emphasis on cardiac arrhythmias. I intend to graduate in Biomedical Engineering. I am interested in several fields in this area, such as: scientific research, biomaterials, biomechanics and others. In addition, I am interested in the field of Neuroscience. I took a course in Basic Neuroscience at the University of São Paulo (USP). Hobbies: traveling, cooking and watching series and movies. Education: Undergraduate student at Federal University of ABC (UFABC) – Bachelor in Science and Technology.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        undergrad_photo: 'gustavo-ferraz-de-araujo.png',
        undergrad_name: 'Gustavo Ferraz de Araujo',
        undergrad_resume: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        undergrad_photo: 'livia-costas.png',
        undergrad_name: 'Livia Costas',
        undergrad_resume: 'My participation in the group is as a student of Researching From the First Day (PDPD). I intend to graduate in Biomedical Engeneering, and the areas I’m interested the most are: scientific reasearch, biomaterials, medical equipment development and tissue engineering. Hobbies: cooking, drawing, playing volleyball and reading. Education: Undergraduate student of Interdisciplinar Bachelor of Science and Techonology at Federal University of ABC (UFABC).',
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