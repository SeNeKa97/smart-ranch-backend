const User = require('./../../models').User;
const Token = require('./../../models').Token;
let model = require('./../../models');
const Role = require('./../../models').Role;

let hash = require('object-hash');

module.exports = {

	authorizeWithToken(token){
		let userfound = null;

		return Token.findOne({
			where: {
				value: token
			}
		})
		.then(tokenFound => {
			if(!tokenFound){
				return new Promise((resolve, reject) =>{
					reject("Token not found!")
				});
			}
			else{
				if(tokenFound.expirationDate < new Date())
					return new Promise((resolve, reject) =>{
						reject("Token has expired!")
					})
				else{
					return User.findOne({
						where: {
							id: tokenFound.idUser
						}
					})
					.then(userFound => {
						return {
							user: userFound.name,
							token: tokenFound.value,
							role: userFound.idRole
						}
					})
				}
				//User
			}

		})
	},


	authorizeWithCredentials(username, passwordHash){
		return User
		.findOne({
			where: {
				name: username,
				passwordHash: passwordHash
			}
		})
		.then(userfound => {
			if(!userfound)
				return new Promise((resolve, reject) =>{
					reject("User not found!")
				});
			else{
				console.log(userfound.idRole);
				return Token.findOne({
					where:{
						idUser: userfound.id
					}
				})
				.then(tokenfound => {
					if(tokenfound){
						
						if(tokenfound.expirationDate < new Date())
							return Token.destroy({
								where: {
									id: tokenfound.id,
								}
							})
							.then(() => {
									let newToken = generateToken();

									return Token.create({
										idUser: idUser,
										value: newToken,
										expirationDate: addDays(new Date(), 2)
									})
									.then(result => {
										return {
											username: username,
											token: result.value,
											role: userfound.idRole
										}
									});
								}
							);
						else
							return {
								username: username,
								token: tokenfound.value,
								role: userfound.idRole
							};
					} else {

						let newToken = generateToken();

						return Token.create({
							idUser: userfound.id,
							value: newToken,
							expirationDate: addDays(new Date(), 2)
						})
						.then(result => {

							return {
								username: username,
								token: result.value,
								role: userfound.idRole
							}
						});
					}
				});

			}
		})
	},


	hasRights(token, roleIdRequired){

		if(token){
			return this.authorizeWithToken(token)
				.then(result => {
					if(result.role < roleIdRequired)
						return new Promise((resolve, reject) =>{
							reject("Not enough rights!")
						});
					else
						return true;
				})
		} else {
			return new Promise((resolve, reject) =>{
				reject("Token not found!")
			});
		}

	}


};

function generateToken(){
	
	let alphabet = "0123456789abcdef";
	let alphLength = alphabet.length;
	let charArray = [];

	const TOKEN_LENGTH = 16;

	for(let i = 0; i < TOKEN_LENGTH; i++){
		let index = Math.round(Math.random() * alphLength);
		let char = alphabet[index];

		charArray.push(char);
	}

	return charArray.join("");
}


function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}


/*
Auth по токену:
 Если токена нет - редирект
 Если токен устарел - редирект
 Если токен есть, но у пользователя недостаточно прав - редирект
 Если токен есть, у пользователя достаточно прав 
Auth по credentials:
 Если пользователя нет - вернуть ошибку
 Если пользователь есть, но нет токена - сгенерировать новые токен - вернуть токен, имя и роль
 Если пользователь есть, но токен устарел - удалить старый - сгеренировать новый токен - вернуть токен, имя и роль
 Если пользователь есть, есть актуальный токен - вернуть токен, имя и роль

На клиенте:
 Попытка 
*/