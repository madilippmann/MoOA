'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        username:'alec_has_a_chair',
        firstName:'Alec',
        lastName:'Keeler',
        hashedPassword: bcrypt.hashSync('password'),
        email:'alec@chair.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        username: 'Amya.Turcotte',
        firstName: 'Afton',
        lastName: 'Flatley',
        hashedPassword: '$2a$10$6ME6TD..6FMZes6bKwDJUeHzkG7iIq8IhWpDlh5E3Z6u5wdhmF3Aq',
        email: 'Sterling_Walker@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Dagmar76',
        firstName: 'Blanca',
        lastName: 'Prohaska',
        hashedPassword: '$2a$10$AsqLBdelPYN1ammmcFh1f.FtIZO2HgT.o5rtuLIPMlrfYOaI2w8gS',
        email: 'Thomas.Bernier@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Clarissa.Howell2',
        firstName: 'Magdalen',
        lastName: 'McGlynn',
        hashedPassword: '$2a$10$aL73HwTZNrENXx3D5bI7yuQjvVV3VnIMWFJ6KQo712ovtS7r0aQWu',
        email: 'Unique42@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Samantha.Hagenes',
        firstName: 'Alda',
        lastName: 'Bosco',
        hashedPassword: '$2a$10$0AWZJHnGxpW2pJ5FvwYc.OZdXsu4aOEeZBtWRQYZL9RSUkCEEGWdK',
        email: 'Ashtyn58@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Mireya.Schroeder21',
        firstName: 'Verdie',
        lastName: "O'Kon",
        hashedPassword: '$2a$10$DbHUsA2.eVs1b5ayAis4TueggQq6Qwe7TyRaVB8aUf/gfUQxB9.Ri',
        email: 'Stanford.Cassin81@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Ayden52',
        firstName: 'Rodrigo',
        lastName: 'Monahan',
        hashedPassword: '$2a$10$RjSwKEh5B5trG65XxexzT.RQq31Fb6XKj5WOlBfA1uS/TxWfvLs3O',
        email: 'Kristopher_Hand@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Rosalee52',
        firstName: 'Dorothy',
        lastName: 'Crona',
        hashedPassword: '$2a$10$6u4Rg.ge8m2vMQwpPdO1BeCQMssDbqjSNj55WgHrpz.sLH4Tasj0q',
        email: 'Arely_Rice18@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Darion.Stehr63',
        firstName: 'Frankie',
        lastName: 'Lockman',
        hashedPassword: '$2a$10$cg8x9v0EegwZkthmluA49uA7RkOndNeGhbCxQskfpCYdm4C18en/O',
        email: 'Derick.Kerluke67@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Neal41',
        firstName: 'Evan',
        lastName: 'Jones',
        hashedPassword: '$2a$10$fOepT5cIq9ySCH5x3ecXgO2WZj877mhH6Pw8r0u3/vEbF6OQbXUj6',
        email: 'Julianne_Wunsch@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Janelle_Jerde43',
        firstName: 'Wava',
        lastName: 'Schiller',
        hashedPassword: '$2a$10$1DeMQtaF6gBNWJKdi.ahhOC9AXp/8p6fdmsm1SvBOio7l8xl4H.hK',
        email: 'Rozella.Bednar70@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Haylie_Balistreri',
        firstName: 'Larue',
        lastName: 'Conroy',
        hashedPassword: '$2a$10$nfLQXdTQ6J.JDwMwsKj0VOfpHz8ar2LsgKkav8jE4d93fNYGKdg56',
        email: 'Nathaniel.Jenkins@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Enos.Moore74',
        firstName: 'Jace',
        lastName: 'Crist',
        hashedPassword: '$2a$10$2tWBEDPkDo1gpRBSvLytrOye4eYxil0DC02HEBk9NiSr97z/fapPW',
        email: 'Laverna87@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Jermaine6',
        firstName: 'Brenda',
        lastName: 'Schuppe',
        hashedPassword: '$2a$10$G4/Dep1fiFBTvjWn8HPFjugYOu.EE1MX/E3mLZgBwRCl4FeMnsbN.',
        email: 'Zora.OKeefe54@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Jeffrey_Deckow82',
        firstName: 'Malvina',
        lastName: 'Oberbrunner',
        hashedPassword: '$2a$10$og3AYzsgMLXDQVwhhqkcvekUkhaEC2wIW8uB6Q.W.h567ytQBasSu',
        email: 'Joshua_Connelly71@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Enrique_Fisher',
        firstName: 'Winston',
        lastName: 'Dibbert',
        hashedPassword: '$2a$10$HH7oy0fk75lnULCrN93SRehv20SvH7DLdVHVG7C6zN3n3cII0l5Pm',
        email: 'Russ76@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Leonor_Ritchie48',
        firstName: 'Destinee',
        lastName: 'Dietrich',
        hashedPassword: '$2a$10$1x7gaOsYfjtlp.TSCWt3Ke0XPHIRGul.0n66cxJN.p1gpyjxdG5KC',
        email: 'Berenice79@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Alec_Effertz',
        firstName: 'Robb',
        lastName: 'Christiansen',
        hashedPassword: '$2a$10$N7DingYTB37uZMn0NOv1k.o5nmgJTe/T.k5KOkejuh2RJbH58YgQK',
        email: 'Aglae79@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Liliana20',
        firstName: 'Magnus',
        lastName: 'Dietrich',
        hashedPassword: '$2a$10$/crOQpGoLHCoozTtCSf2Z.9APQmQHW2RAb6rrAKHgPZRogz5yq.z2',
        email: 'Cornelius33@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Dean_Rogahn91',
        firstName: 'Vada',
        lastName: 'Feest',
        hashedPassword: '$2a$10$vqNLvtxWYIfVTQmlRr/WCuWCrXHbsZHXnXtBQmfdqXkYaHeVEerzW',
        email: 'Rene.Blanda@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Brad29',
        firstName: 'Bertram',
        lastName: 'Langworth',
        hashedPassword: '$2a$10$izgyIgllEad0ZJ9raAJAm.ADNYa90rPeJGS2CnmAYXAMuFcBnpcEG',
        email: 'Robbie.Parisian@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Lindsay.Brekke70',
        firstName: 'Gerard',
        lastName: 'McKenzie',
        hashedPassword: '$2a$10$m9HEcaXn8pFPzPqIBqWSmOkhb/T3agfnCKVtcP8pumJBZXTGbWckC',
        email: 'Paula62@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Casey37',
        firstName: 'Janice',
        lastName: 'Bayer',
        hashedPassword: '$2a$10$QhL7RfbKINPZ5dypWABSxO9WPnxN79Od/ml27xQJH487UDoS5pasW',
        email: 'Margarett62@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Isabelle_Blick',
        firstName: 'Esteban',
        lastName: 'Schoen',
        hashedPassword: '$2a$10$9NeoHO4D/N0.3uaY/fthvey/8ZTkArcxcXC7WHittXVPVHOH5beOi',
        email: 'Cleveland29@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Bryce.Jenkins91',
        firstName: 'Caterina',
        lastName: 'Torp',
        hashedPassword: '$2a$10$t2EJtufbbGT6hs8gGEhXo.7ReA4yoAqfmQxkcqfH88UWAoZ6tBp8W',
        email: 'Susie13@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Jessyca.Baumbach',
        firstName: 'Stephanie',
        lastName: 'Labadie',
        hashedPassword: '$2a$10$oQy9BHJcUzBJdhQaaNPVbuOj.mo2C1zosGMvOk1rwpEExBQ5dEviq',
        email: 'Graham15@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Herbert46',
        firstName: 'Sam',
        lastName: 'Hermiston',
        hashedPassword: '$2a$10$LwbJoRzrPxlTTkxgujqnAupFfTXLSHQVs.4C0geejxwtIWRWzj./u',
        email: 'Mozelle_Greenfelder3@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Octavia24',
        firstName: 'Marilou',
        lastName: 'Johnston',
        hashedPassword: '$2a$10$ydV9RCtFn8pIy7hWk0l0Luo8.lUgcCWEJtlcUQ6wtqhZpMoNo1PPq',
        email: 'Megane29@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
      {
        username: 'Kaitlyn83',
        firstName: 'Tiffany',
        lastName: 'Jenkins',
        hashedPassword: '$2a$10$k1/K3vJ29uV3VyG1.lSdvug2zmHNXypgk7gvaJWtShF9TkiM68Esy',
        email: 'Kyle69@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      } ,
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
