'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementType = sequelize.define('MeasurementType', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false
    }
  }, {
  	timestamps: false,
	freezeTableName: true,
	tableName: 'measurementtypes'
  });
  MeasurementType.associate = function(models) {
    // associations can be defined here
  };
  return MeasurementType;
};