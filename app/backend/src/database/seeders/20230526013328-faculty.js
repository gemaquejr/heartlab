'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const faculty = [
      {
        faculty_photo: 'joao-lameu-da-silva.png',
        faculty_name: 'João Lameu da Silva',
        email: '',
        phone: '',
        curriculum: 'http://lattes.cnpq.br/7563505845567082',
        faculty_resume: 'João Lameu da Silva Júnior holds Ph.D. and M.Sc. degrees in Chemical Engineering from the University of Campinas (UNICAMP), Brazil. He is currently Adjunct Professor in Biomedical Engineering of Federal University of ABC (UFABC). Since 2010, he has worked with Computational Fluid Dynamics (CFD) by studying multiphase flows and Microfluidics mostly applied to chemical processing. Currently, his topics of interest include the use of CFD as a numerical tool in the fields of Biomedical Engineering. The areas of interest include hemodynamics in the cardiovascular system, the prediction of cardiovascular and blood pathology development, Multiphysics-coupled problems and also, the design and optimization of devices applied in the biomedical fields, e.g., the Microfluidic-based biosensors. Over the past years he was lecturer of Transport Phenomena at undergraduate level. Also, he takes the course Introduction of Biofluid Mechanics, aiming the usage of CFD at a learning level in biomedical cases of study. He enjoys sharing knowledge and experience of mathematical modeling and numerical simulation of fluid flow problems gained along the past years.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        faculty_photo: 'joao-loures-salinet-junior.png',
        faculty_name: 'João Loures Salinet Junior',
        email: 'joao.salinet@ufabc.edu.br',
        phone: '+55(11)2320-6342',
        curriculum: 'http://lattes.cnpq.br/7563505845567082',
        faculty_resume: 'João Salinet is a highly motivated researcher, keen to do cutting-edge research on Biomedical Engineering. Currently, he is a senior lecturer of Biomedical Engineering at the ABC Federal University(UFABC) where he has been a faculty member since 2015. He is also an Associate Researcher of the most important Latin America Heart Institute(InCor-FMUSP). Prior to joining the faculty, he was a post-doctorate researcher at Mogi das Cruzes University and InCor from 2014-2015. Salinet completed his Ph.D. in Bioengineering at the University of Leicester in 2014 and received a MSc.degree in Biomedical Engineering at the State University of Campinas(DEB-FEEC-UNICAMP) in 2009. He finished his undergraduate studies in Electrical Engineering at the Federal University of Santa Catarina(UFSC) in 2002. Dr.Salinet also worked on private and public Biomedical Engineering Institutions(Philips-VMI, Boldrini Childrens Centre for Hematologic Investigations, ANVISA). Salinets research interests have spanned a wide range of topics in biomedical engineering, from medical engineering, physiological signal processing to medical device regulation. Over the last 7 years, he has focused on setup design and use of advanced signal processing analysis on hearts signals from realistic mathematical models, animals experimental models, and human cases allowing a better understanding of hearts conduction system and its mechanisms under cardiac disorders such atrial fibrillation, to allow customized patient ablation treatment to improve patient outcome. He has published over 20 articles in refereed journals, 107 conference proceedings, 2 books chapters, 15 distinguished research awards or feature publications. Short-listed as United Kingdom early-stage engineering researcher(STEM for Britain, 2011), three times short-listed at the Young Investigator Competition(2012, 2015, 2017), granted with the Student Santander Travel Awards(2013). Remarkable achievements were reached throughout those years, such as: research projects acceptance in the main Brazil funding agencies, awards, oral presentation at highly impact conferences, consistent research achievements recognized by highly impact journals such Heart Rhythm, reviewer of national and international conferences and journals, member of academic and research panels and committees, lecturer and supervisor on both under-graduation and post-graduation levels, and interdisciplinary worldwide research centers collaboration.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        faculty_photo: 'john-sims.png',
        faculty_name: 'John Sims',
        email: '',
        phone: '+55(11)4996-6363(R.6363)',
        curriculum: 'http://lattes.cnpq.br/4191073114324958',
        faculty_resume: 'John Sims holds a Ph.D. degree in Electrical Engineering from the University of São Paulo, Brazil, MSc. Degree in Sound and Vibration Studies from the University of Southampton, United Kingdom, and a BSc in Physics from Nottingham University, United Kingdom.  He is presently an adjunct professor (grade C1) at the University of ABC (UFABC), São Paulo, Brazil, and is integrated into the Biomedical Engineering course. During his doctoral studies, he worked with the identification of pathologies which alter the motion of the cardiac left ventricle, detecting the motion using optical flow and then decomposing the motion to find rotational and radial centers of motion in 3D Positron Emission Tomography images. He lectures at UFABC, both at undergraduate and postgraduate levels. He takes the courses: Medical Image Processing (undergraduate) and Advanced Techniques in Medical Images (postgraduate). He supervises undergraduate students in projects mainly related to medical image processing. He greatly enjoys sharing knowledge and experience gained in working with medical images in a hospital environment with his students.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('faculties', faculty, {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('faculties', null, {});
  }
};