'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const associatedResearchers = [
      {
        researchers_photo: 'angela-macedo-salinet.png',
        researchers_name: 'Angela Macedo Salinet',
        email: '',
        phone: '',
        curriculum: 'http://lattes.cnpq.br/9493054361605595',
        researchers_resume: 'Angela Salinet has completed her PhD in Cardiovascular Sciences at the University of Leicester (United Kingdom) in 2014 and received her MSc degree in Neurology at University of Campinas in 2008. Salinet’s research interests have spanned a wide range of topics in cerebral hemodynamics, including pathophysiological changes after stroke, traumatic brain injury and others neurological diseases. Angela is currently a research associate at the Federal University of ABC (UFABC), guest lecturer in Physiotherapy Department at the University of São Paulo and senior lecturer in Physiotherapy at the University Ibirapuera. Dr Salinet has published over 50 articles in refereed journals, conference proceedings, and other edited collections. Her notable research work along the years has resulted in more than 600 citations (H index = 18), and got grant/scholarship funding approval by different Brazilian agencies. Angela is naturally curious, loves learning new things, hardworking and is enthusiastic in sharing knowledge with the team.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        researchers_photo: 'ilija-uzelac.png',
        researchers_name: 'Ilija Uzelac',
        email: 'ilija.uzelac@physics.gatech.edu',
        phone: '(615)3065677',
        curriculum: '',
        researchers_resume: 'Ilija Uzelac holds a Ph.D. degree in Physics from Vanderbilt University and an MBA from Georgia Institute of Technology, MSc. Degree in Biomedical Engineering from the University of Belgrade, and has published over 30 articles and presented his research worldwide. For over a decade, he has worked on measurement and modeling in biological physics and electrophysiology, at the scale of whole hearts including zebrafish, guinea pig, rabbit, cat, dog, sheep heart, and other exotic animals of different evolutionary heart electrophysiology as alligators and frogs. His core expertise is diverse and includes optical mapping measurement, signal measurement and conditioning with analog electronics design, signal and image processing, arrhythmia and arrhythmia control mechanisms, and studies related to drugs’ effects on ionic membrane currents. His research aims to better understand the mechanisms of arrhythmia and arrhythmia control, novel techniques, and methods related to heart electrophysiology, ablation, and low-energy defibrillation. His mission is to invent tools and techniques required to understand biological systems across spatiotemporal scales and focus research and education on an integrated multidisciplinary approach. He loves teaching and learning and sharing his knowledge and enthusiasm for research, with extensive experience with academic collaborators worldwide. He loves teamwork to have shared goals, team rewards, and share whole team rewards.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        researchers_photo: 'fernando-campos.png',
        researchers_name: 'Fernando Campos',
        email: '',
        phone: '',
        curriculum: 'https://www.cemrg.co.uk/people/team',
        researchers_resume: 'Fernando received his B.Sc. in Computer Science and M.Sc. in Computational Modelling degrees from the Federal University of Juiz de fora, Brazil, before completing a PhD degree in Biomedical Engineering at the Graz University of Technology, Austria in 2012. He was awarded an Science Without Borders Scholarship to carry out research on the mechanisms of spontaneous arrhythmias in post-infarction hearts at German Heart Institute Berlin, Germany. In 2017 he was appointed as a Research Associate at King’s College London, where he is currently conducting research on modelling the initiation and treatment of ventricular arrhythmias in the infarcted heart.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        researchers_photo: 'fernando-silva-de-moura.png',
        researchers_name: 'Fernando Silva de Moura',
        email: '',
        phone: '',
        curriculum: 'http://lattes.cnpq.br/1807993326551252',
        researchers_resume: 'Graduated in Mechanical Engineering from Polytechnic School of the University of São Paulo (2006). He earned his Ph.D. in Engineering from the Polytechnic School of the University of São Paulo (2013). He is with the Center of Engineering, Modelling and Applied Social Sciences of Federal University of ABC. He has experience in biomedical engineering with emphasis on signal processing, system dynamics, control systems, Kalman Filters and stochastic estimation, electrical impedance tomography, inverse problems, finite element method, ill-posed problems and regularization, and modal analysis.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        researchers_photo: 'fernando-silva-de-moura.png',
        researchers_name: 'Fernando Silva de Moura',
        email: '',
        phone: '',
        curriculum: 'http://lattes.cnpq.br/1807993326551252',
        researchers_resume: 'Graduated in Mechanical Engineering from Polytechnic School of the University of São Paulo (2006). He earned his Ph.D. in Engineering from the Polytechnic School of the University of São Paulo (2013). He is with the Center of Engineering, Modelling and Applied Social Sciences of Federal University of ABC. He has experience in biomedical engineering with emphasis on signal processing, system dynamics, control systems, Kalman Filters and stochastic estimation, electrical impedance tomography, inverse problems, finite element method, ill-posed problems and regularization, and modal analysis.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        researchers_photo: 'maria-guillem-sanchez.png',
        researchers_name: 'María Guillem Sánchez',
        email: '',
        phone: '',
        curriculum: '',
        researchers_resume: 'Masters in Biomedical Engineering (Northwestern University, NU, 2006) and PhD in Electronics Engineering (Universitat Politècnica de València, UPV, 2009) is the Deputy Director of ITACA Research Institute at UPV and head of the Cardiac Oriented Research Laboratory. She was a Fulbright fellow at NU and currently is an Associate Professor at the Electronics Engineering Department at UPV. Dr. Guillem is co-author of 40 international scientific research papers, more than 100 conference papers, 3 patents, and has participated in 40 national/international research projects, 7 of them as PI. Her research interests include the development of medical instrumentation and signal processing for the diagnosis and treatment of cardiac diseases. She participates in the Executive Board of the Consortium for Electrocardiographic imaging and the Board of Directors of Computing in Cardiology.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        researchers_photo: 'jose-carlos-pachon.png',
        researchers_name: 'José Carlos Pachón',
        email: '',
        phone: '',
        curriculum: '',
        researchers_resume: 'I am senior investigatior in Cardiac Electrophysiology and Electrical Estimulation keen on to develop new methods in clinic to improve patient’s treatment. Currently, I have got 12 patents, 77 publiched journal papers and about 200 conferences proceedings. Currently, I am chief physician and investigator from the Pacemaker Service of the Dante Pazzanese Institute of Cardiology, director of the Service of Electrophysiology Pacemaker and Arrhythmias of the Heart Hospital, chief physician – Service of Electrophysiology Pacemakers and Arrhythmias Dr Pachón and physician responsible for the arrhythmias service of the Hospital Professor Edmundo Vasconcelos. Linhas de Pesquisa: Fibrilação Atrial, Sistema nervoso autônomo, Sincope, AF-Nests, Cardioneuroablation, filogênia cardíaca, Estimulação Cardíaca Fisiológica, Cardiomiopatia induzida por marca-passo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('associatedResearchers', associatedResearchers, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('associatedResearchers', null, {});
  }
};