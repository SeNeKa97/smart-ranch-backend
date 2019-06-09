var express = require('express');
var router = express.Router();


const presetController = require('../controllers').preset;
/* GET users listing. */
router.get('/', function(req, res, next) {
	presetController.getBundle()
		.then(bundle => { res.json(bundle)})
  		.catch(err => res.status(400).json({error: err}));
});

router.post('/update', function(req, res, next) {
	let bundle = req.body;

	presetController.updateBundle(bundle)
  		.then(bundle => { res.json({success: "success"})})
  		.catch(err => res.status(400).json({error: err}));
  	//res.json({success: "success"});
});


module.exports = router;
