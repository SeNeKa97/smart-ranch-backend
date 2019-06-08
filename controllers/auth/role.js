const Role = require('./../../models').Role;

module.exports = {
	getAll(){
		return Role
		.findAll();
	},

	getById(id){
		return Role
		.findOne({
			where: {
				id: id
			}
		});
	}
};