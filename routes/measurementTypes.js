var express = require('express');
var router = express.Router();

const measurementTypeController = require('../controllers').measurementType;

/* GET users listing. */

router.get('/', function(req, res, next) {
	measurementTypeController.getAll()
		.then(measurementTypes => res.json(measurementTypes))
		.catch(err => res.json({error: err}));
});


router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	measurementTypeController.getById(id)
		.then(measurementType => res.json(measurementType))
		.catch(err => res.json({error: err}));
});


module.exports = router;