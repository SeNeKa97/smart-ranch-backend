const Employee = require('./../../models').Employee;
module.exports = {
	create(req, res) {
		console.log(req.body.companyId);
		return Employee
		.create({
			name: req.body.name,
			designation: req.body.designation,
			companyId: req.body.companyId
			//companyId: req.body.companyId
		})
		.then(employee => {
			res.status(201).send(employee);
		})
		.catch(error => res.status(400).send(error));
	},
	getAll(req, res){
		return Employee
		.findAll({
			include: [
            	models.Company,
        	]
		})
		.then(employee => {
			console.log(JSON.stringify(employee));
			res.status(201).send(employee);
		})
		.catch(error => res.status(400).send(error));
	}
};