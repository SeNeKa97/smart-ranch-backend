'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    level: {
    	type:DataTypes.INTEGER,
    	allowNull: false
    }
  }, {
  	timestamps: false,
	freezeTableName: true,
	tableName: 'roles'
  });
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};