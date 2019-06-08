var express = require('express');
var router = express.Router();

const tokenController = require('../controllers').token;
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
	tokenController.getAll()
		.then(tokens => res.json(tokens))
		.catch(err => res.json({error: err}));
});

router.get('/:id', function(req, res, next) {
	const id = req.params.id;

	tokenController.getById(id)
		.then(token => res.json(token))
		.catch(err => res.json({error: err}));
});

router.get('/user/:id', function(req, res, next) {
	const id = req.params.id;

	tokenController.fetchUser(id)
		.then(user => res.json(user))
		.catch(err => res.json({error: err}));
});

router.post('/update', function(req, res, next) {
	const body = req.body;

	tokenController.update(body.id, body.value, body.expirationDate)
		.then(tokens => res.json(tokens))
		.catch(err => res.json({error: err}));
});

router.post('/', function(req, res, next) {
	const body = req.body;

	tokenController.create(body.IdUser, body.value, body.expirationDate)
		.then(tokens => res.json(tokens))
		.catch(err => res.json({error: err}));
});


router.delete('/:id', function(req, res, next) {
	const id = req.params.id;

	tokenController.delete(id)
		.then(res.json({success: "token "+id+" deleted"}))
		.catch(err => res.json({error: err}));
});

router.delete('/byuser/:id', function(req, res, next) {
	const id = req.params.id;

	tokenController.delete(id)
		.then(res.json({success: "token "+id+" deleted"}))
		.catch(err => res.json({error: err}));
});
*/


module.exports = router;
