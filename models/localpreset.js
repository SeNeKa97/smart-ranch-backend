'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocalPreset = sequelize.define('LocalPreset', {
  	idType: {
    	type: DataTypes.INTEGER,
    	allowNull: false
    },
    idBoard: {
    	type: DataTypes.INTEGER,
    	allowNull: false
    },
    value: {
    	type: DataTypes.FLOAT,
    	allowNull: false
    }
  }, {
  	timestamps: false,
	freezeTableName: true,
	tableName:'localpresets'
  });
  LocalPreset.associate = function(models) {
  	LocalPreset.belongsTo( models.MeasurementType, {
  		foreignKey: 'idType',
  		onDelete: 'CASCADE'
  	})
  	LocalPreset.belongsTo( models.Board, {
  		foreignKey: 'idBoard',
  		onDelete: 'CASCADE'
  	})
    // associations can be defined here
  };
  return LocalPreset;
};