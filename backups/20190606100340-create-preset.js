'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Presets', {
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
      value: {
        allowNull: false,
        type: Sequelize.FLOAT
      }   
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Presets');
  }
};