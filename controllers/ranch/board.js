const Board = require('./../../models').Board;

module.exports = {
	create(name, serial) {

		return Board
		.create({
			name: name,
			serial: serial,
		});
	},

	update(id, name, serial){
		return Board
		.findOne({
			where: {
				id: id
			}
		})
		.then(result=>
			result.update({
				name: name,
				serial: serial
			})
		);
	},

	getAll(){
		return Board
		.findAll();
	},

	getById(id){
		return Board
		.findOne({
			where: {
				id: id
			}
		});
	},

	fetchSerial(serial){
		return Board
		.findOne({
			where: {
				serial: serial
			}
		});
	},

	delete(id){
		return Board
		.destroy({
			where: {
				id: id
			}
		});
	}
};