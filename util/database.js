const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop', 'root', 'Kharsha@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
