'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    passwordHash: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    lastActivity: {
    	type:DataTypes.DATE
    },
    idRole: {
    	type: DataTypes.INTEGER,
    	allowNull: false
    }
  }, {
  	timestamps: false,
	freezeTableName: true,
	tableName: 'users'
  });
  User.associate = function(models) {
  	User.belongsTo(models.Role, {
  		foreignKey: 'idRole',
  		onDelete: 'CASCADE'
  	});
    // associations can be defined here
  };
  return User;
};