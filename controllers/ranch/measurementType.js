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
	}
};