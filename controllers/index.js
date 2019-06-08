const auth = require('./auth/auth');
const user = require('./auth/user');
const token = require('./auth/token');
const role = require('./auth/role');

const board = require('./ranch/board');
const measurementType = require('./ranch/measurementType');
const measurement = require('./ranch/measurement');
const preset = require('./ranch/preset');
const localPreset = require('./ranch/localPreset');
const room = require('./ranch/room');


module.exports = {
	auth,
	user,
	token,
	role,

	board,
	measurementType,
	measurement,
	preset,
	localPreset,
	room
};