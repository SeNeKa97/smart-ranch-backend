const User = require('./../../models').User;
const Token = require('./../../models').Token;
let hash = require('object-hash');
let model = require('./../../models');

module.exports = {
	create(name, password, role) {

		return User
		.create({
			name: name,
			passwordHash: hash(password, {algorithm: 'md5'}),
			idRole: role
		});
	},

	update(id, name, password, role){
		return User
		.findOne({
			where: {
				id: id
			}
		})
		.then(result=>
			result.update({
				name: name,
				passwordHash: hash(password, {algorithm: 'md5'}),
				idRole: role
			}),
			reject=>{
				reject("User not found!");
			}
		);
	},

	updateDate(id, activityDate){
		return User
		.findOne({
			where: {
				id: id
			},
		})
		.then(result=>
			result.update({
				lastActivity: activityDate
			}),
			reject=>{
				reject("User not found!");
			}
		);
	},

	getAll(){
		return User
		.findAll({
			include: [
				model.Role
			]
		});
	},

	getById(id){
		return User
		.findOne({
			where: {
				id: id
			},
			include: [
				model.Role
			]
		});
	},

	getByCredentials(name, passwordHash){
		return User
		.findOne({
			where: {
				name: name,
				passwordHash: passwordHash
			},
			include: [
				model.Role
			]
		});
	},

	fetchToken(id){
		return Token
		.findOne({
			where: {
				idUser: id
			}
		});
	},

	fetchRole(idRole){
		return User
		.findOne({
			where: {
				idRole: idRole
			},
			include: [
				model.Role
			]
		});
	},

	delete(id){
		return User
		.destroy({
			where: {
				id: id
			}
		});
	}
};