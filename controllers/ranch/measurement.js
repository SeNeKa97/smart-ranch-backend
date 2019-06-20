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

		promises[0] =  Measurement.create({
			idType: 2,
			idBoard: board,
			timestamp: time,
			value: bundle["temperature"]
		});
		promises[1] =  Measurement.create({
				idType: 3,
				idBoard: board,
				timestamp: time,
				value: bundle["humidity"]
		});
		promises[2] = Measurement.create({
				idType: 4,
				idBoard: board,
				timestamp: time,
				value: bundle["luminosity"]
		});
		promises[3] =  Measurement.create({
				idType: 5,
				idBoard: board,
				timestamp: time,
				value: bundle["water_level"]
		});
		promises[4] =  Measurement.create({
				idType: 6,
				idBoard: board,
				timestamp: time,
				value: bundle["food_level"]
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

	fetchTop(idBoard, idType){
		return Measurement
		.findAll({
			where: {
				idType: idType,
				idBoard: idBoard				
			},
			limit: 20,
			order: [ [ 'timestamp', 'DESC' ]]
		})
		.then(result=>result.reverse());
	},

	fetchLatest(idBoard){
		let results = [];

		results[0] = Measurement.findOne({
			where: {
				idBoard: idBoard,
				idType: 2
			},
			order: [[ 'id', 'DESC' ]]
		})
		results[1] = Measurement.findOne({
			where: {
				idBoard: idBoard,
				idType: 3
			},
			order: [[ 'id', 'DESC' ]]
		})
		results[2] = Measurement.findOne({
			where: {
				idBoard: idBoard,
				idType: 4
			},
			order: [[ 'id', 'DESC' ]]
		})
		results[3] = Measurement.findOne({
			where: {
				idBoard: idBoard,
				idType: 5
			},
			order: [[ 'id', 'DESC' ]]
		})
		results[4] = Measurement.findOne({
			where: {
				idBoard: idBoard,
				idType: 6
			},
			order: [[ 'id', 'DESC' ]]
		})

		return Promise.all(results).then(values=>{
			let measurements = {
				temperature: values[0].value,
				humidity: values[1].value,
				luminosity: values[2].value,
				water_level: values[3].value,
				food_level: values[4].value,
			};

			return measurements;
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