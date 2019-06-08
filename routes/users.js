var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;

/* GET users listing. */
router.get('/', function(req, res, next) {
	userController.getAll()
		.then(users => res.json(users))
		.catch(err => res.json({error: err}));
});


router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	userController.getById(id)
		.then(user => res.json(user))
		.catch(err => res.json({error: err}));
});

router.post('/creds/', function(req, res, next) {
	const body = req.body;

	userController.getByCredentials(body.name, body.passwordHash)
		.then(users => res.json(users))
		.catch(err => res.status(400).json({error: err}));
});


router.post('/update', function(req, res, next) {
	const body = req.body;

	userController.update(body.id, body.name, body.password, body.idRole)
		.then(users => res.json(users))
		.catch(err => res.status(400).json({error: err}));
});



router.post('/updatedate', function(req, res, next) {
	const body = req.body;

	userController.update(body.id, body.date)
		.then(users => res.json(users))
		.catch(err => res.json({error: err}));
});


router.post('/', function(req, res, next) {
	const body = req.body;

	userController.create(body.name, body.password, body.idRole)
		.then(users => res.json(users))
		.catch(err => res.json({error: err}));
});



router.delete('/:id', function(req, res, next) {
	const id = req.params.id;

	userController.delete(id)
		.then(res.json({success: "user "+id+" deleted"}))
		.catch(err => res.json({error: err}));
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
