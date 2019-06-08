var express = require('express');
var router = express.Router();

const measurementController = require('../controllers').measurement;

/* GET users listing. */

router.post('/', function(req, res, next) {
	const body = req.body;

	measurementController.create(body.idType, body.idBoard, body.value)
		.then(measurements => res.json(measurements))
		.catch(err => res.json({error: err}));
});


router.get('/', function(req, res, next) {
	measurementController.getAll()
		.then(measurements => res.json(measurements))
		.catch(err => res.json({error: err}));
});


router.get('/type/:id&:idtype', function(req, res, next) {
	let id = req.params.id;
	let idType = req.params.idtype;

	measurementController.filterByType(id, idType)
		.then(measurements => res.json(measurements))
		.catch(err => res.json({error: err}));
});


router.get('/period/:id&:from&:to', function(req, res, next) {
	let id = req.params.id;
	let from = req.params.from;
	let to = req.params.to;

	measurementController.filterByPeriod(id, from, to)
		.then(measurements => res.json(measurements))
		.catch(err => res.json({error: err}));
});


router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	measurementController.getById(id)
		.then(measurement => res.json(measurement))
		.catch(err => res.json({error: err}));
});

/*
router.post('/update', function(req, res, next) {
	const body = req.body;

	measurementController.update(body.id, body.name)
		.then(measurements => res.json(measurements))
		.catch(err => res.json({error: err}));
});

router.post('/', function(req, res, next) {
	const body = req.body;

	measurementController.create(body.name)
		.then(measurements => res.json(measurements))
		.catch(err => res.json({error: err}));
});


router.delete('/:id', function(req, res, next) {
	const id = req.params.id;

	measurementController.delete(id)
		.then(res.json({success: "measurement "+id+" deleted"}))
		.catch(err => res.json({error: err}));
});
*/


module.exports = router;