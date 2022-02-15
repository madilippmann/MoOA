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
      }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
