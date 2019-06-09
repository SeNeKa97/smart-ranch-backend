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
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
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