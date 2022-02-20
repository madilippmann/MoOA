'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        username:'alec_has_a_chair',
        firstName:'Alec',
        lastName:'Keeler',
        avatar_path: 'https://mooa-seed.s3.amazonaws.com/seed/aleckeeler.png',
        hashedPassword: bcrypt.hashSync('password'),
        email:'alec@chair.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Dagmar76',
        firstName: 'Dagmar',
        lastName: 'CatOverlord',
        avatar_path: 'https://mooa-seed.s3.amazonaws.com/seed/chonk.png',
        hashedPassword: '$2a$10$AsqLBdelPYN1ammmcFh1f.FtIZO2HgT.o5rtuLIPMlrfYOaI2w8gS',
        email: 'Dagmar.Smith@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'im_a_pilot',
        firstName: 'Catty',
        lastName: 'McCattenberger',
        avatar_path: 'https://mooa-seed.s3.amazonaws.com/seed/cat.png',
        hashedPassword: bcrypt.hashSync('bestpilot'),
        email: 'imapilot@cat.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Leanne.Graham21',
        firstName: 'Christa',
        lastName: 'Effertz',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg',
        hashedPassword: '$2a$10$jFyyJDj7Lngp0jHpaJPXSu1h/FYQTXo4jbBZihzudqTJQBK0CtGt6',
        email: 'Concepcion93@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Reginald.Schoen59',
        firstName: 'Pamela',
        lastName: 'Robel',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg',
        hashedPassword: '$2a$10$iCUPCok26ucwj/nwqgNa9OVpMuwOcp23/5Jng1.gbGVmS1sJ89hFS',
        email: 'Marshall10@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Mabel_Wisozk',
        firstName: 'Fredy',
        lastName: 'Altenwerth',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg',
        hashedPassword: '$2a$10$gejacIDVMEWjQlgbLxmpjeW1KJNqAI3BCrvH9XkD3/cIU06XJ3eja',
        email: 'Jerrold.Kessler16@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Kaley.Murray',
        firstName: 'Alisa',
        lastName: 'Jenkins',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/734.jpg',
        hashedPassword: '$2a$10$Khjm0UPgA7z7i0TeRlMT5OaGBFYI6.d7oNnhfXEv5O76VeH6/HFkq',
        email: 'Guadalupe_Reynolds@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Osvaldo.Hyatt81',
        firstName: 'Camron',
        lastName: 'Schroeder',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1044.jpg',
        hashedPassword: '$2a$10$IZQVHupCWA4UPoRkiCQ.5OzQC6IuW8MWTvkY1ZctAs4z2Mll1SXmO',
        email: 'Akeem_Price2@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Aaron.Kemmer',
        firstName: 'Philip',
        lastName: 'Emmerich',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/444.jpg',
        hashedPassword: '$2a$10$23dPh6kSK1/MTJoC3itPgeVEjMUmL.mZ6vaWAogZs1GhHm1ZSj8be',
        email: 'Allison_Vandervort@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'German_Erdman',
        firstName: 'Edgardo',
        lastName: 'Haley',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg',
        hashedPassword: '$2a$10$46Or5ZmFCp0OTcx0IL1e/eYgxFx3BLw3FaMtICCspQSl4prxqBqAy',
        email: 'Greta68@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Trycia.McLaughlin',
        firstName: 'Ron',
        lastName: 'Mayert',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg',
        hashedPassword: '$2a$10$ZRdH1nQ/aABhAfpZpR6nte.tOIzrTpmHXyWZueSOu3aGN6KoFeEqG',
        email: 'Clair92@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Norma.Windler',
        firstName: 'Doyle',
        lastName: 'Rau',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/372.jpg',
        hashedPassword: '$2a$10$cO4UUgQqzNxaT5kF7ge5vOXd5ebvWgFH8/b6..uPvOgIJoU6e7Uo2',
        email: 'Issac92@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Jillian.Schuster68',
        firstName: 'Johnnie',
        lastName: 'Graham',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/400.jpg',
        hashedPassword: '$2a$10$X1jL69QINqBJ9LehF5ZvTuheqzcJAwaM/ht02VUdPgHhL5AQ7e.Zq',
        email: 'Hazel.Jerde@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Allen_Gutkowski24',
        firstName: 'Janick',
        lastName: 'Tillman',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/368.jpg',
        hashedPassword: '$2a$10$YHZoSAm30.AN46DOOZVb3OLWRGm6chOxAkD77rTW6mJFyeh.YriD2',
        email: 'Annette_Greenfelder@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Rhianna.Ebert9',
        firstName: 'Lila',
        lastName: 'Runte',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/249.jpg',
        hashedPassword: '$2a$10$b8.LjJy1EH4nlSuz3tfFdOCZJ6VDiZ572GYQlnhNfTxksAJWAwJgq',
        email: 'Martine.Emard@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Clemens.Quigley99',
        firstName: 'Marcos',
        lastName: 'Walker',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg',
        hashedPassword: '$2a$10$OOMeUro9U5073ppSlLu1VOecvGj8GBVo.AulrhW2TlCI0B9Z1hrq.',
        email: 'Lionel_Bogan55@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Lauren.Rowe32',
        firstName: 'Percy',
        lastName: 'Dickens',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1197.jpg',
        hashedPassword: '$2a$10$SKEncKdKfnhDVDLmIaEndeUfk3hY51icMNtoOyEphG7wZMtnI6FM6',
        email: 'Aric83@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Jack13',
        firstName: 'Merle',
        lastName: 'Boehm',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/327.jpg',
        hashedPassword: '$2a$10$xXior5WXjkxTVIxTRE9Gd.eQ6fb.YA36FIvVP9Em31X7HQY8XzDlS',
        email: 'Omari_Schamberger84@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Eli_Wintheiser63',
        firstName: 'Janie',
        lastName: 'Lueilwitz',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg',
        hashedPassword: '$2a$10$XDTolOr8iClfR1CBFcIU2eoIGBnwOv4P.HuulVTTI5MvtJeQ96jue',
        email: 'Albert.Buckridge63@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Wayne.Veum53',
        firstName: 'Kim',
        lastName: 'Harris',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg',
        hashedPassword: '$2a$10$32wXt0dtZEheLkwCcObj7eEpoRFYRCzASY1cKjLNkuRjf9ckULmJS',
        email: 'Katharina.Larkin63@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Dorthy_Wisozk',
        firstName: 'Cynthia',
        lastName: 'Connelly',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/44.jpg',
        hashedPassword: '$2a$10$RuISdCsIf0oi2pIBLU47peuXUEDzWjvpn5WK3CGE5K6//nV9lwlHS',
        email: 'Kali38@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Reese_Yundt',
        firstName: 'Leone',
        lastName: 'Hegmann',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/869.jpg',
        hashedPassword: '$2a$10$k26nHZhVw/nKaHxlDqR5Iur1YhQ1KwsijGnydciMmmFqFxyeY4B3q',
        email: 'Marco.Morissette58@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Tamia_Wilkinson57',
        firstName: 'Brycen',
        lastName: 'King',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg',
        hashedPassword: '$2a$10$UZ5SYRwT7fTIAHc9978CPut/szucQyw7/lvlkcI.NVzMMyS3mvpRq',
        email: 'Ettie97@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'America.Turner',
        firstName: 'Eveline',
        lastName: 'Reichel',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/427.jpg',
        hashedPassword: '$2a$10$Q1MuOUgqSiX15C5f1wNe3OAElzbkah00cj/gyeNOmGUpxp14G4jwK',
        email: 'Jesse81@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Adaline12',
        firstName: 'Stephanie',
        lastName: 'Kemmer',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/551.jpg',
        hashedPassword: '$2a$10$C3g466pb7oxqyqH51CQxVeAI37DWOA4n763xAqrrWO2P07CaFV0ZK',
        email: 'Karlie_Spinka@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Mariana68',
        firstName: 'Emanuel',
        lastName: 'Schowalter',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg',
        hashedPassword: '$2a$10$kmeDtsv/rZI.jtCZVz9rueCdrPTDjq7c9uy17oqdmive7atTBoRnq',
        email: 'Caterina95@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Gracie_Jacobson81',
        firstName: 'Kadin',
        lastName: 'Daugherty',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1105.jpg',
        hashedPassword: '$2a$10$hm7C6ARPJRMmYB4j3Rtd5OTEFTUt2KZEXOVrssYsPi8A/P99qcO8q',
        email: 'Ena_Medhurst72@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Laurine_Bosco6',
        firstName: 'Myrtie',
        lastName: 'Roberts',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg',
        hashedPassword: '$2a$10$Xe0NeiPie0iEw1qLJrxiMuAy.d17PRPb9KUCtnv5CvCqVrPsUKCnS',
        email: 'Tremaine.Stoltenberg89@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Lou_Stark',
        firstName: 'Kevon',
        lastName: 'Dare',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/390.jpg',
        hashedPassword: '$2a$10$KQjbN1I16BGUFNwgpLB/DudDkFeLkfjNaU.mCR7H43DfB1crpKspW',
        email: 'Tristin_Kuvalis@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Jocelyn_Welch',
        firstName: 'Cortez',
        lastName: 'Bode',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1045.jpg',
        hashedPassword: '$2a$10$zCpC4O78LalMHaMzjFugTe6Cklhk8WLQaFLHfi3LLLhl..PhS/aIa',
        email: 'Eda87@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        username: 'Mozell_Bartoletti67',
        firstName: 'Ozella',
        lastName: 'Veum',
        avatar_path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1114.jpg',
        hashedPassword: '$2a$10$Ij.MV.8qDgyBr1cjF3HEBeCZQ9N9X0ioc0A1VzcwjrQOa61zqlNM.',
        email: 'Gracie34@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
