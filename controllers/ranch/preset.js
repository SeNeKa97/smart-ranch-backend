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
	}
};