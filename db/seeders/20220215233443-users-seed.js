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
        username: 'Stewart.Prohaska',
        firstName: 'Kurtis',
        lastName: 'Stoltenberg',
        hashedPassword: '$2a$10$SZKv0xqgO/TiB/iofCJdLOy//rMbXuMa2v29vUA6sG4B.ORtivpt.',
        email: 'Alize_Lubowitz@hotmail.com',
        createdAt: 'Mon Jun 28 2021',
        updatedAt: 'Mon Sep 20 2021'
      } ,
      {
        username: 'Jedediah.Spinka74',
        firstName: 'Oswaldo',
        lastName: 'Murphy',
        hashedPassword: '$2a$10$JadETWf21yIIa3clPQ0l1OoB1kygIrIiVJyGtjE/wy.vvn/9RIKUO',
        email: 'Jackeline46@yahoo.com',
        createdAt: 'Mon Mar 22 2021',
        updatedAt: 'Mon Jul 19 2021'
      } ,
      {
        username: 'Hiram.Pagac',
        firstName: 'Emil',
        lastName: 'Wiegand',
        hashedPassword: '$2a$10$Hlabn9vwKxI.dmrurX1.pev5r61UKP38Nzwlw1jaMbZmjPOZ/6GJa',
        email: 'Colleen.Dare@yahoo.com',
        createdAt: 'Sun Nov 07 2021',
        updatedAt: 'Mon Nov 15 2021'
      } ,
      {
        username: 'Jude32',
        firstName: 'Ocie',
        lastName: 'MacGyver',
        hashedPassword: '$2a$10$O4Ltdt/ZFSYkD5hyVc8uzOS0aPyZ4yBhwFxkXHe94.chKzZZoDs1e',
        email: 'Leonardo65@gmail.com',
        createdAt: 'Wed Sep 15 2021',
        updatedAt: 'Thu Nov 25 2021'
      } ,
      {
        username: 'Ernie80',
        firstName: 'Saul',
        lastName: 'Sporer',
        hashedPassword: '$2a$10$ZQTSxUEFWyqNUjfZTXzNb.3b1QJCCyWM3Sp2LM9ZI6Watm3H5l0wG',
        email: 'April.Hintz@yahoo.com',
        createdAt: 'Sun Aug 22 2021',
        updatedAt: 'Sun Jul 11 2021'
      } ,
      {
        username: 'Lennie.Reinger18',
        firstName: 'Brett',
        lastName: 'Cassin',
        hashedPassword: '$2a$10$GOQ1JXuZ1aQ4vKbS9VkIr.xnkqYWGhC0.K5quPb0g5fRjjDLOJPmy',
        email: 'Miles.Schultz@hotmail.com',
        createdAt: 'Thu Feb 10 2022',
        updatedAt: 'Thu Mar 25 2021'
      } ,
      {
        username: 'Kelvin_Satterfield',
        firstName: 'Lexi',
        lastName: 'Hettinger',
        hashedPassword: '$2a$10$uWuAW99LhsGpmvWmJixcdeXeDC70LoHc4.y4sFWOevEEEAAVfnzGW',
        email: 'Olga.Gleichner29@hotmail.com',
        createdAt: 'Tue Nov 09 2021',
        updatedAt: 'Sun Sep 26 2021'
      } ,
      {
        username: 'Zack53',
        firstName: 'Harry',
        lastName: 'Prohaska',
        hashedPassword: '$2a$10$joJLLZgaO9yiXV6Jipcjse2t.6/ojZ6nZ9cgYXIXLAN9UgeirgDpy',
        email: 'Efrain98@yahoo.com',
        createdAt: 'Sun Sep 26 2021',
        updatedAt: 'Sat Jun 19 2021'
      } ,
      {
        username: 'Karianne.Franecki40',
        firstName: 'Eldred',
        lastName: 'Fadel',
        hashedPassword: '$2a$10$mqvnPTd2NvrA0CphU8CcJOMp94F7Kv9DmxxP8YWuuBC3/JYT01wLO',
        email: 'Letha.Heathcote@yahoo.com',
        createdAt: 'Wed Apr 21 2021',
        updatedAt: 'Wed Jun 02 2021'
      } ,
      {
        username: 'Jeramie.Tremblay96',
        firstName: 'Kaitlin',
        lastName: 'Bernhard',
        hashedPassword: '$2a$10$iuKOeWH6VQpWdAwbnChgPuggI.1SgIWEh.4vAuyomzTRatOK5YDwG',
        email: 'Lenna.Schmidt5@hotmail.com',
        createdAt: 'Wed Feb 02 2022',
        updatedAt: 'Thu Jun 24 2021'
      } ,
      {
        username: 'Elmore_Shields',
        firstName: 'Rylee',
        lastName: 'Block',
        hashedPassword: '$2a$10$RZp.7gaIpMoxR.GICE8ecO9e4kTab1E4XKOF8om4pJWPNJ1949wY.',
        email: 'Bryon.Yost@hotmail.com',
        createdAt: 'Thu Nov 04 2021',
        updatedAt: 'Wed Dec 01 2021'
      } ,
      {
        username: 'Ben.Funk',
        firstName: 'Kirk',
        lastName: 'Beer',
        hashedPassword: '$2a$10$RHkPq90/U/TPgk9RPf0uWOztpd/SIB4VFF/S4i3E9aFYcP2ZXYhxi',
        email: 'Astrid_Frami@yahoo.com',
        createdAt: 'Wed May 12 2021',
        updatedAt: 'Fri Jul 02 2021'
      } ,
      {
        username: 'Flossie59',
        firstName: 'Janice',
        lastName: 'Hahn',
        hashedPassword: '$2a$10$.H..2WCraYLrkLoSItCyN.AixLXM.UIr9omlg.xdR4lyU771i6UZG',
        email: 'Sammy37@yahoo.com',
        createdAt: 'Mon Jun 28 2021',
        updatedAt: 'Thu Oct 14 2021'
      } ,
      {
        username: 'Devyn_Schuppe23',
        firstName: 'Courtney',
        lastName: 'Rogahn',
        hashedPassword: '$2a$10$S7BF/vRwy4EdRVSpr7tT.OsDDz3uEqEyL3nnFlh7LcT3Nt2u/cyEq',
        email: 'Marc_Jast77@yahoo.com',
        createdAt: 'Thu Dec 02 2021',
        updatedAt: 'Wed Feb 09 2022'
      } ,
      {
        username: 'Dale20',
        firstName: 'Nils',
        lastName: 'Rogahn',
        hashedPassword: '$2a$10$bApY.L90ykswom1hjkuTvueoqjsrinEJWr7hJEXue5zs2z/XClaEi',
        email: 'Martin.Green@gmail.com',
        createdAt: 'Sun May 02 2021',
        updatedAt: 'Sun Apr 04 2021'
      } ,
      {
        username: 'Lynn67',
        firstName: 'Garry',
        lastName: 'Johns',
        hashedPassword: '$2a$10$bAW26Wut72hvsnem3tAqa.p3.TUq7k4FoAB6ZCftzPVsCe6t/Ve22',
        email: 'Emelia_Kuhn0@hotmail.com',
        createdAt: 'Thu Sep 02 2021',
        updatedAt: 'Fri Jan 28 2022'
      } ,
      {
        username: 'Flo.Romaguera',
        firstName: 'Melyssa',
        lastName: 'Dietrich',
        hashedPassword: '$2a$10$QnSgruVKxgLJLMV8/gnDLey46lo9RGbL27NC3qyxN1hjHe9AOlhdG',
        email: 'Laverne.Stracke@gmail.com',
        createdAt: 'Wed Dec 29 2021',
        updatedAt: 'Sun Nov 21 2021'
      } ,
      {
        username: 'Adrian_Hettinger97',
        firstName: 'Doyle',
        lastName: 'Osinski',
        hashedPassword: '$2a$10$mf4Jkbzs2Jmms7mls5lhDehVmKfHk9IeznDCxlG.aqbq8sI82e6Xy',
        email: 'Ona_Kemmer6@gmail.com',
        createdAt: 'Sat Jan 29 2022',
        updatedAt: 'Sun Jul 11 2021'
      } ,
      {
        username: 'Kassandra.Harber22',
        firstName: 'Candice',
        lastName: 'Krajcik',
        hashedPassword: '$2a$10$7kTzgZGLqBoe/sIOAsS/q.G/cCZdwDsEELTHDOHD5HBKhYruT/Ywq',
        email: 'Barbara_Schaefer@yahoo.com',
        createdAt: 'Fri Oct 01 2021',
        updatedAt: 'Sat Jan 15 2022'
      } ,
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
