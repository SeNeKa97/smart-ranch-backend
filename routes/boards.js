var express = require('express');
var router = express.Router();

const boardController = require('../controllers').board;

/* GET users listing. */
router.get('/', function(req, res, next) {
	boardController.getAll()
		.then(boards => res.json(boards))
		.catch(err => res.status(400).json({error: err}));
});


router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	boardController.getById(id)
		.then(board => res.json(board))
		.catch(err => res.status(400).json({error: err}));
});


router.post('/update', function(req, res, next) {
	const body = req.body;

	boardController.update(body.id, body.name, body.serial)
		.then(boards => res.json(boards))
		.catch(err => res.json({error: err}));
});


router.post('/', function(req, res, next) {
	const body = req.body;

	boardController.create(body.name, body.serial)
		.then(boards => res.json(boards))
		.catch(err => res.json({error: err}));
});


router.delete('/:id', function(req, res, next) {
	const id = req.params.id;

	boardController.delete(id)
		.then(res.json({success: "Board "+id+" deleted"}))
		.catch(err => res.json({error: err}));
});



module.exports = router;
