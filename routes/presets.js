var express = require('express');
var router = express.Router();


const presetController = require('../controllers').preset;
const authController = require('../controllers').auth;

const ROLE_REQUIRED = 2;
/* GET users listing. */
router.get('/', function(req, res, next) {
	presetController.getBundle()
		.then(bundle => { res.json(bundle)})
  		.catch(err => res.status(400).json({error: err}));
});



router.post('/update', function(req, res, next) {
	let bundle = req.body;
	const token = req.body.token;

	authController.hasRights(token, ROLE_REQUIRED)
	.then(result => {
		if (result === true)
			presetController.updateBundle(bundle)
  				.then(bundle => { res.json({success: "success"})})
  				.catch(err => res.status(400).json({error: err}));
  	})
	.catch(err => res.status(400).json({error: err}));
  	//res.json({success: "success"});
});


module.exports = router;
