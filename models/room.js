'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    description: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    idBoard: {
    	type: DataTypes.INTEGER,
    	allowNull: false
    }
  }, {
  	timestamps: false,
	freezeTableName: true,
	tableName: 'rooms'
  });
  Room.associate = function(models) {
  	Room.belongsTo(models.Board, {
  		foreignKey: 'idBoard',
  		onDelete: 'CASCADE'
  	})
    // associations can be defined here
  };
  return Room;
};