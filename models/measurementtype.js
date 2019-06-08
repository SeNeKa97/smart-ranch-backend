'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementType = sequelize.define('MeasurementType', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false
    }
  }, {
  	timestamps: false
  });
  MeasurementType.associate = function(models) {
    // associations can be defined here
  };
  return MeasurementType;
};