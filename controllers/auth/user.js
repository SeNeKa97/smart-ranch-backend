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
			})
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
			})
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
			}
		});
	},

	getByCredentials(name, passwordHash){
		console.log(User);
		return User
		.findOne({
			where: {
				name: name,
				passwordHash: passwordHash
			}
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
			}
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