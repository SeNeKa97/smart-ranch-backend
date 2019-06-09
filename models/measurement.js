'use strict';
module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define('Measurement', {
  	idType: {
    	type: DataTypes.INTEGER,
    	allowNull: false
    },
    idBoard: {
    	type: DataTypes.INTEGER,
    	allowNull: false
    },
    timestamp: {
    	type: DataTypes.DATE,
    	allowNull: false
    },
    value: {
    	type: DataTypes.FLOAT,
    	allowNull: false
    }
  }, {
  	timestamps: false,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Measurement.associate = function(models) {
  	Measurement.belongsTo( models.MeasurementType, {
  		foreignKey: 'idType',
  		onDelete: 'CASCADE'
  	})
  	Measurement.belongsTo( models.Board, {
  		foreignKey: 'idBoard',
  		onDelete: 'CASCADE'
  	})
    // associations can be defined here
  };
  return Measurement;
};