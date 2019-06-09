var express = require('express');
var router = express.Router();

const roomController = require('../controllers').room;
const authController = require('../controllers').auth;

const ROLE_REQUIRED = 3;
/* GET users listing. */
router.get('/', function(req, res, next) {
	roomController.getAll()
		.then(rooms => res.json(rooms))
		.catch(err => res.status(400).json({error: err}));
});


router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	roomController.getById(id)
		.then(room => res.json(room))
		.catch(err => res.status(400).json({error: err}));
});


router.post('/update', function(req, res, next) {
	const body = req.body;
	const token = body.token;
	
	authController.hasRights(token, ROLE_REQUIRED)
	.then(result => {
		if (result === true)	
			roomController.update(body.id, body.description, body.idBoard)
				.then(rooms => res.json(rooms))
				.catch(err => res.status(400).json({error: err}));
	})
	.catch(err => res.status(400).json({error: err}));
});


router.post('/', function(req, res, next) {
	const body = req.body;
	const token = body.token;

	authController.hasRights(token, ROLE_REQUIRED)
	.then(result => {
		if (result === true)

			roomController.create(body.description, body.idBoard)
				.then(rooms => res.json(rooms))
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
			roomController.delete(id)
				.then(res.json({success: "room "+id+" deleted"}))
				.catch(err => res.status(400).json({error: err}));
	})
	.catch(err => res.status(400).json({error: err}));
});



module.exports = router;
