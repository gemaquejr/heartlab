'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const postgrad = [
      {
        experience: 'phd_students',
        postgrad_photo: 'jimena-gabriela-siles-paredes.png',
        postgrad_name: 'Jimena Gabriela Siles Paredes',
        nationality: 'Bolivian',
        age: '31',
        email: 'jimena.gabriela@ufabc.edu.br',
        phone: '+5511912861007',
        curriculum: 'http://lattes.cnpq.br/6530572432646524',
        advisor: 'João Salinet',
        postgrad_resume: 'I am currently a Ph.D. student in Biotechnoscience at the Federal University of ABC in Brazil. Supervised by João L. Salinet, My participation in this group is about to characterize the epicardial atrial substrate during fibrillation in experimental studies using optical mapping. I am a Biomedical Engineer by profession, and I worked as a Clinical Engineer at the Boliviano Japones Institute of Gastroenterology for five years. In 2017 I won a grand given by The Organization of American States to realize her master’s studies in Biomedical Engineering at the same university where I am currently doing her Ph.D. During the pandemic, I returned to my country to work as director of Biomedical Engineering at the Universidad Privada del Valle. This year, I returned to Brazil to start my doctoral studies thanks to the São Paulo Research Foundation (FAPESP), where the aim of the research is to develop experimental in situ models of electrically stimulated-induced Atrial Fibrillation by customizing metrics and electrophysiological maps used in the clinic for the ablation treatment of patients with AF.',
        hobbies:[],
        education: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        experience: 'master_students',
        postgrad_photo: 'tainan-cerqueira-neves.png',
        postgrad_name: 'Tainan Cerqueira Neves',
        nationality: 'Brazilian',
        age: '',
        email: '',
        phone: '',
        curriculum: '',
        advisor: 'João Salinet',
        postgrad_resume: 'Currently belonging to the graduate program in Biomedical Engineering at the Federal University of ABC, I have actively participated in the laboratory activities in HEartLab regarding the study of Atrial Fibrillation (AF) in perfused rabbit hearts. The objective of my work with the group is the correct identification and spatiotemporal classification of AF in cardiac electrophysiology. With future perspectives to contribute to the improvement and implementation of new techniques to current health technology systems. Contributing to medical diagnosis and prognosis within medical-hospital environments.',
        hobbies:['Photography', 'cinema', 'theater', 'board games'],
        education: 'Chemistry Technician, Bachelor of Science and Technology and student of Biomedical Engineering.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        experience: 'master_students',
        postgrad_photo: 'giovanni-lazzarin-weber.png',
        postgrad_name: 'Giovanni Lazzarin Weber',
        nationality: 'Brazilian',
        age: '',
        email: '',
        phone: '',
        curriculum: '',
        advisor: 'João Salinet',
        postgrad_resume: 'Working on a Masters degree in Biomedical Engineering my participation in the group is focused on developing a setup for optical and electrical mapping of the heart epicardium in an isolated perfused setup (Langendorff). Professional: Technical support on electronic cardiac implantable devices, such as pacemakers, implantable cardioverter-defibrillators and cardiac resynchronization therapy devices. Technical advisory during invasive electrophysiology procedures, arrhythmia mapping and ablation.',
        hobbies:['travelling', 'Building and working on my workshop', 'trying out new food'],
        education: 'Bachelor of Science and Technology (2016) and Biomedical Engineering (2018).',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        experience: 'master_students',
        postgrad_photo: 'italo-sandoval-ramos-de-oliveira.png',
        postgrad_name: 'Italo Sandoval Ramos de Oliveira',
        nationality: 'Brazilian',
        age: '25',
        email: '',
        phone: '',
        curriculum: '',
        advisor: '',
        postgrad_resume: 'My participation in the group focuses on the post-processing of non-invasive heart signals and BSPM to obtain spatiotemporal metrics that bring benefits for the automated characterization of atrial arrhythmias. The main objective is to be able to use the signals to help identify the main driver mechanism of the arrhythmia and its location in the atria, by using these metrics in machine learning algorithms.',
        hobbies:['music', 'games', 'piano', 'programming'],
        education: 'Bachelor of Science and Technology and Biomedical Engineering. Studying Bachelor in Neuroscience and masters degree in Biomedical Engineering (starting in 2021.3).',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        experience: 'master_students',
        postgrad_photo: 'rena-romanelli.png',
        postgrad_name: 'Rena Romanelli',
        nationality: 'Brazilian',
        age: '26',
        email: '',
        phone: '',
        curriculum: '',
        advisor: '',
        postgrad_resume: 'My participation in the group is as a student of Scientific Initiation in the area of ​​Cerebral Autoregulation, contributing to the development and validation of the CAAos Software, a new open-source platform for the calculation of cerebral autoregulation. More specifically, I contribute to the development and validation of the Autoregulation Index (ARI) method, which quantifies cerebral autoregulation on a scale of 0 to 9, based on data of blood pressure and cerebral blood flow velocity. I am currently working on the development of a new method of cerebral autoregulation on CAAos Platform, the ARI method – auto-regressive with moving average.',
        hobbies:['arts in general', 'drawing', 'painting', 'performing theatre', 'books', 'movies', 'cultural tours'],
        education: 'Graduate student at UFABC and Scientific Initiation at FAPESP.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        experience: 'master_students',
        postgrad_photo: 'rhuan-de-castro-correia.png',
        postgrad_name: 'Rhuan de Castro Correia',
        nationality: 'Brazilian',
        age: '27',
        email: '',
        phone: '',
        curriculum: '',
        advisor: 'João Salinet',
        postgrad_resume: 'My participation in this group aims to develop a master’s work an in situ experimental setup of induced Atrial Fibrillation with electrical stimulation for future customization of metrics and electrocardiographic maps obtained by electrocardiographic surface mapping (MES). This characterization may allow the identification of intrinsic patterns and characteristics of each AF mechanism in a non-invasive way, and may, in the future, help electrophysiologists in planning for the determination of therapeutic strategies. Professional areas nowadays: project and innovation management, developer of technologies for measurement and quality control of ionizing radiation (Gamma and X rays) for radiodiagnosis; IoT applied to radiation dosimetry and Medical Physics, regulatory consolidation and project documentation (ANVISA), quality assurance management. Other areas of interest: microelectronics, embedded programming, biomedical instrumentation, radionics and image processing, biomedical signals, photonics, high density PCIs (multlayer and HDI) and IoT communication protocols. Graduation work: Development of an electrocardiographic system for the acquisition and vector analysis of cardiac biopotentials for vetocardiography and electrocardiography (Advisor: João Loures Salinet Junior).',
        hobbies:['traveling', 'gym', 'outdoor sports', 'running', 'fighting', 'studying'],
        education: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        experience: 'master_students',
        postgrad_photo: 'angelica-drielly-santos-de-quadros.png',
        postgrad_name: 'Angélica Drielly Santos de Quadros',
        nationality: 'Brazilian',
        age: '25',
        email: 'angelica.quadros@ufpa.itec.br',
        phone: '+5594981718035',
        curriculum: '',
        advisor: 'João Salinet',
        postgrad_resume: 'My participation in the research group as a Master’s student in the Graduate Program in Biomedical Engineering is in the area of cardiac electrophysiology, with a focus on atrial fibrillation (AF). Continuing the projects already under development at Heartlab, I work on customizing the non-invasive electrocardiographic imaging method for generating electrophysiological maps of the epicardium. The in situ experiments will make it possible to study AF behaviors and patterns in the epicardium in a non-invasive way, which in the future may help electrophysiologists in planning to determine therapeutic strategies.',
        hobbies:['reading', 'traveling', 'cooking', 'meditating', 'dancing'],
        education: 'Biomedical Engineer (Federal University of Pará), postgraduate student in Biomedical Engineering at UFABC.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('postgradStudents', postgrad, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('postgradStudents', null, {});
  }
};