const Token = require('./../../models').Token;
const User = require('./../../models').User;
let model = require('./../../models');

module.exports = {
	create(user, value, expirationDate) {


		return Token
		.create({
			idUser: user,
			value: value,
			expirationDate: expirationDate
		});
	},

	update(id, value, expirationDate){
		console.log(expirationDate);

		return Token
		.findOne({
			where: {
				id: id
			}
		})
		.then(result=>
			result.update({
				value: value,
				expirationDate: expirationDate
			})
		);
	},

	getAll(){
		return Token
		.findAll({
			include: [
				models.User
			]
		});
	},

	getById(id){
		return Token
		.findOne({
			where: {
				id: id
			}
		});
	},

	fetchUser(token){
		let user = null;

		return Token.findOne({
			where: {
				id: token
			}
		})
		.then( result =>{
				return User.findOne({
					where: {
						id: result.idUser
					}
				})
			}
		);
	},

	delete(id){
		return Token
		.destroy({
			where: {
				id: id
			}
		});
	},

	deleteByUser(user){
		return Token
		.destroy({
			where: {
				idUser: user
			}
		});
	}
};
