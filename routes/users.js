var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;
const authController = require('../controllers').auth;

const ROLE_REQUIRED = 3;

/* GET users listing. */
router.get('/', function(req, res, next) {
	userController.getAll()
		.then(users => res.json(users))
		.catch(err => res.status(400).json({error: err}));
});


router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	userController.getById(id)
		.then(user => res.json(user))
		.catch(err => res.status(400).json({error: err}));
});

router.get('/role/:idRole', function(req, res, next) {
	const id = req.params.idRole;

	userController.fetchRole(id)
		.then(user => res.json(user))
		.catch(err => res.status(400).json({error: err}));
});
/*
router.post('/creds/', function(req, res, next) {
	const body = req.body;

	userController.getByCredentials(body.name, body.passwordHash)
		.then(users => res.json(users))
		.catch(err => res.status(400).json({error: err}));
});
*/

router.post('/update', function(req, res, next) {
	const body = req.body;
	const token = body.token;

	authController.hasRights(token, ROLE_REQUIRED)
	.then(result => {
		if (result === true)

		userController.update(body.id, body.name, body.password, body.idRole)
			.then(users => res.json(users))
			.catch(err => res.status(400).json({error: err}));
	})
	.catch(err => res.status(400).json({error: err}));
});



router.post('/updatedate', function(req, res, next) {
	const body = req.body;
	const token = body.token;


	authController.hasRights(token, ROLE_REQUIRED)
	.then(result => {

		if (result === true){
			userController.updateDate(body.id, body.date)
				.then(users => res.json(users))
				.catch(err => res.status(400).json({error: err}));
		}
	})
	.catch(err => res.status(400).json({error: err}));
});


router.post('/', function(req, res, next) {
	const body = req.body;
	const token = body.token;

	authController.hasRights(token, ROLE_REQUIRED)
	.then(result => {
		if (result === true)

			userController.create(body.name, body.password, body.idRole)
				.then(users => res.json(users))
				.catch(err => res.status(400).json({error: err}));
	})
	.catch(err => res.status(400).json({error: err}));
});



router.delete('/:id&:token', function(req, res, next) {
	const id = req.params.id;
	const token = req.params.token;

	authController.hasRights(token, ROLE_REQUIRED)
	.then(result => {
		if (result === true)
			userController.delete(id)
				.then(res.json({success: "user "+id+" deleted"}))
				.catch(err => res.status(400).json({error: err}));
	})
	.catch(err => res.status(400).json({error: err}));
});
/*
router.get('/token/:id', function(req, res, next) {
	const id = req.params.id;

	userController.fetchToken(id)
		.then(user => res.json(user))
		.catch(err => res.json({error: err}));
});

router.get('/role/:id', function(req, res, next) {
	const id = req.params.id;

	userController.fetchRole(id)
		.then(user => res.json(user))
		.catch(err => res.json({error: err}));
});
*/
module.exports = router;
