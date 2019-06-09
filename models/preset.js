'use strict';
module.exports = (sequelize, DataTypes) => {
  const Preset = sequelize.define('Preset', {
    idType: {
    	type: DataTypes.INTEGER,
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
  Preset.associate = function(models) {
  	Preset.belongsTo( models.MeasurementType, {
  		foreignKey: 'idType',
  		onDelete: 'CASCADE'
  	})
    // associations can be defined here
  };
  return Preset;
};