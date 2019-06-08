const MeasurementType = require('./../../models').MeasurementType;

module.exports = {
	getAll(){
		return MeasurementType
		.findAll();
	},

	getById(id){
		return MeasurementType
		.findOne({
			where: {
				id: id
			}
		});
	},

/*
	create(name, serial) {

		return MeasurementType
		.create({
			name: name,
		});
	},

	update(id, name, serial){
		return MeasurementType
		.findOne({
			where: {
				id: id
			}
		})
		.then(result=>
			result.update({
				name: name
			})
		);
	},

	delete(id){
		return MeasurementType
		.destroy({
			where: {
				id: id
			}
		});
	}
*/
};