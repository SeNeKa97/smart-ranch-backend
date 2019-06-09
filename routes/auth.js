var express = require('express');
var router = express.Router();


const auth = require('../controllers').auth;
/* GET users listing. */
router.post('/credentials/', function(req, res, next) {
	let name = req.body.name;
	let passwordHash = req.body.passwordHash;

	auth.authorizeWithCredentials(name, passwordHash)
		.then(result => res.json(result))
		.catch(err => res.status(400).json({error: err}));
});


router.post('/token', function(req, res, next){
	let token = req.body.token;

	auth.authorizeWithToken(token)
		.then(result => res.json(result))
		.catch(err => res.status(400).json({error: err}));
});

/*
router.post('/hasrights', function(req, res, next){
	let token = req.body.token;
	const ROLE_REQUIRED = 1;

	auth.hasRights(token, ROLE_REQUIRED)
		.then(result => res.json(result))
		.catch(err => res.status(400).json({error: err}));
});
*/


module.exports = router;
