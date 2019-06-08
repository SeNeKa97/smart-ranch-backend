var express = require('express');
var router = express.Router();

const roomController = require('../controllers').room;

/* GET users listing. */
router.get('/', function(req, res, next) {
	roomController.getAll()
		.then(rooms => res.json(rooms))
		.catch(err => res.json({error: err}));
});


router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	roomController.getById(id)
		.then(room => res.json(room))
		.catch(err => res.json({error: err}));
});


router.post('/update', function(req, res, next) {
	const body = req.body;

	roomController.update(body.id, body.description, body.idBoard)
		.then(rooms => res.json(rooms))
		.catch(err => res.json({error: err}));
});


router.post('/', function(req, res, next) {
	const body = req.body;

	roomController.create(body.description, body.idBoard)
		.then(rooms => res.json(rooms))
		.catch(err => res.json({error: err}));
});


router.delete('/:id', function(req, res, next) {
	const id = req.params.id;

	roomController.delete(id)
		.then(res.json({success: "room "+id+" deleted"}))
		.catch(err => res.json({error: err}));
});



module.exports = router;
