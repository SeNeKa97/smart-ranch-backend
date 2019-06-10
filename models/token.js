'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
  	idUser: {
  		type: DataTypes.INTEGER,
  		allowNull: false
  	},
    value: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    expirationDate: {
    	type: DataTypes.DATE,
    	allowNull: false
    }
  }, {
  	timestamps: false,
	freezeTableName: true,
	tableName: 'tokens'
  });
  Token.associate = function(models) {
  	Token.belongsTo(models.User,{
  		foreignKey: 'idUser',
  		onDelete: 'CASCADE'
  	})
    // associations can be defined here
  };
  return Token;
};