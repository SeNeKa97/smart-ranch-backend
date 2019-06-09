'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    serial: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: { len: [10,10] }
    }
  }, {
  	timestamps: false,
	freezeTableName: true,
	tableName: 'boards'
  });
  Board.associate = function(models) {
    // associations can be defined here
  };
  return Board;
};