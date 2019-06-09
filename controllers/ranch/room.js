const Room = require('./../../models').Room;
const Board = require('./../../models').Board;

module.exports = {
	create(description, idBoard) {

		return Room
		.create({
			description: description,
			idBoard: idBoard,
		});
	},

	update(id, description, idBoard){
		return Room
		.findOne({
			where: {
				id: id
			}
		})
		.then(result=>
			result.update({
				description: description,
				idBoard: idBoard
			})
		);
	},

	getAll(){
		return Room
		.findAll({
			include: [
            	Board,
        	]
		});
	},

	getById(id){
		return Room
		.findOne({
			where: {
				id: id
			},
			include: [
            	Board,
        	]
		});
	},

	delete(id){
		return Room
		.destroy({
			where: {
				id: id
			}
		});
	}
};