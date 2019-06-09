const Preset = require('./../../models').Preset;

module.exports = {
	getAll(){
		return Preset
		.findAll();
	},

	getById(id){
		return Preset
		.findOne({
			where: {
				id: id
			}
		});
	},

	updateBundle(bundle){

		let promises = [];
		/*
		for (let i=2;i<7;i++){
			
			promises = Measurement.create({
				idType: i,
				idBoard: board,
				timestamp: time,
				value: bundle[i-2]
			})
		}*/

		promises[0] =  Preset.update({
			value: bundle["tempMin"]
		},{
			where: {
				id: 1
			}
		});
		promises[1] =  Preset.update({
			value: bundle["tempMax"]
		},{
			where: {
				id: 2
			}
		});
		promises[2] =  Preset.update({
			value: bundle["humidMin"]
		},{
			where: {
				id: 3
			}
		});
		promises[3] =  Preset.update({
			value: bundle["humidMax"]
		},{
			where: {
				id: 4
			}
		});
		promises[4] =  Preset.update({
			value: bundle["luminMin"]
		},{
			where: {
				id: 5
			}
		});
		promises[5] =  Preset.update({
			value: bundle["luminMax"]
		},{
			where: {
				id: 6
			}
		});
		promises[6] =  Preset.update({
			value: bundle["waterMin"]
		},{
			where: {
				id: 7
			}
		});
		promises[7] =  Preset.update({
			value: bundle["waterMax"]
		},{
			where: {
				id: 8
			}
		});
		promises[8] =  Preset.update({
			value: bundle["foodMin"]
		},{
			where: {
				id: 9
			}
		});
		promises[9] =  Preset.update({
			value: bundle["foodMax"]
		},{
			where: {
				id: 10
			}
		});
		promises[10] =  Preset.update({
			value: bundle["wasteDelay"]
		},{
			where: {
				id: 11
			}
		});

		return Promise.all(promises);
	},

	getBundle(){
		return Preset.findAll()
			.then(result =>{
				let preset = {};

				preset.tempMin = result[0].value,
				preset.tempMax = result[1].value,

				preset.humidMin = result[2].value,
				preset.humidMax = result[3].value,

				preset.luminMin = result[4].value,
				preset.luminMax = result[5].value,

				preset.waterMin = result[6].value,
				preset.waterMax = result[7].value,

				preset.foodMin = result[8].value,
				preset.foodMax = result[9].value,

				preset.wasteDelay = result[10].value

				return preset;
		});
	}
};