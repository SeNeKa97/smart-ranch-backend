'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Measurements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idType: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'MeasurementTypes',
          key: 'id',
          as: 'idType'
        }
      },
      idBoard: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Boards',
          key: 'id',
          as: 'idBoard'
        }
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Measurements');
  }
};