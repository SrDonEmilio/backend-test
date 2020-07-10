const { v4: uuid } = require('uuid');
const bcrypt = require('bcryptjs')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: uuid(),
      username: 'John1',
      email: 'example1@example.com',
      password: bcrypt.hashSync('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      userType: 'admin'
    },{
      id: uuid(),
      username: 'John2',
      email: 'example2@example.com',
      password: bcrypt.hashSync('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      userType: 'normal'
    },{
      id: uuid(),
      username: 'John3',
      email: 'example3@example.com',
      password: bcrypt.hashSync('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      userType: 'normal'
    },{
      id: uuid(),
      username: 'John4',
      email: 'example4@example.com',
      password: bcrypt.hashSync('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      userType: 'normal'
    },{
      id: uuid(),
      username: 'John5',
      email: 'example5@example.com',
      password: bcrypt.hashSync('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      userType: 'normal'
    },{
      id: uuid(),
      username: 'John6',
      email: 'example6@example.com',
      password: bcrypt.hashSync('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      userType: 'normal'
    },{
      id: uuid(),
      username: 'John7',
      email: 'example7@example.com',
      password: bcrypt.hashSync('12345678', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      userType: 'normal'
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};