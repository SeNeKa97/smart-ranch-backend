var express = require('express');
var router = express.Router();

const roleController = require('../controllers').role;

/* GET users listing. */
router.get('/', function(req, res, next) {
	roleController.getAll()
		.then(roles => res.json(roles))
		.catch(err => res.json({error: err}));
});

router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	roleController.getById(id)
		.then(role => res.json(role))
		.catch(err => res.json({error: err}));
});


module.exports = router;
