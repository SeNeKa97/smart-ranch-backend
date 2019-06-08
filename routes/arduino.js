var express = require('express');
var router = express.Router();

const measurementController = require('../controllers').measurement;

const presetsController = require('../controllers').preset;
const boardsController = require('../controllers').board;

/* GET users listing. */

router.post('/', function(req, res, next) {
	const body = req.body;
	const serial = body.serial;
	const arduino = {};

	boardsController.fetchSerial(serial)
		.then(board=>{
			if(board){
				var preset={};

				presetsController.getAll()
					.then(result =>{
						preset.tempMin = result[0].value,
						preset.tempMax = result[1].value,

						preset.humidMin = result[2].value,
						preset.humidMax = result[3].value,

						preset.luminMin = result[4].value,
						preset.luminMax = result[5].value,

						preset.waterMin = result[6].value,
						preset.waterMax = result[7].value,

						preset.foodMin = result[8].value,
						preset.foodMax = result[9].value,

						preset.wasteDelay = result[10].value

						let bundle = [body.temperature,
									  body.humidity,
									  body.luminosity,
									  body.waterLevel,
									  body.foodLevel];

						measurementController.createBundle(board.id, bundle)
							.catch(err => res.json({error: err}));

						res.json(preset);
					})
				
			}
		})
		.catch(err => console.log(err));	
});

module.exports = router;