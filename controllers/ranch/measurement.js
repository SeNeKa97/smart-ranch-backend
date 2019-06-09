const Measurement = require('./../../models').Measurement;

module.exports = {
	create(type, board, value) {
		return Measurement
		.create({
			idType: type,
			idBoard: board,
			timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
			value: value
		});
	},

	createBundle(board, bundle){
		let promises = [];
		let time = new Date().toISOString().slice(0, 19).replace('T', ' ');
		/*
		for (let i=2;i<7;i++){
			
			promises = Measurement.create({
				idType: i,
				idBoard: board,
				timestamp: time,
				value: bundle[i-2]
			})

			
		}*/
		promises[0] =  Measurement.create({
			idType: 2,
			idBoard: board,
			timestamp: time,
			value: bundle[0]
		});
		promises[1] =  Measurement.create({
				idType: 3,
				idBoard: board,
				timestamp: time,
				value: bundle[1]
		});
		promises[2] = Measurement.create({
				idType: 4,
				idBoard: board,
				timestamp: time,
				value: bundle[2]
		});
		promises[3] =  Measurement.create({
				idType: 5,
				idBoard: board,
				timestamp: time,
				value: bundle[3]
		});
		promises[4] =  Measurement.create({
				idType: 6,
				idBoard: board,
				timestamp: time,
				value: bundle[4]
		});

		return Promise.all(promises);
	},


	getAll(){
		return Measurement
		.findAll();
	},

	getById(id){
		return Measurement
		.findOne({
			where: {
				id: id
			}
		});
	},

	filterByType(idBoard, idType){
		return Measurement
		.findAll({
			where: {
				idType: idType,
				idBoard: idBoard				
			}
		});
	},

	filterByPeriod(idBoard, timeFrom, timeTo){
		return Measurement
		.findAll({
			where: {
				idBoard: idBoard,
				timestamp: {
          			$gt: timeFrom,
            		$lt: timeTo
        		}
			}
		});
	},

	fetchByType(type){
		return Measurement
		.findAll({
			where: {
				idType: type
			}
		});
	},

	fetchByBoard(board){
		return Measurement
		.findAll({
			where: {
				idBoard: board
			}
		});
	}
};