'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'idUser'
        }
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expirationDate: {
        allowNull: false,
        type: Sequelize.DATE        
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tokens');
  }
};