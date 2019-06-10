let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('morgan');


let models = require('./models');


let indexRouter = require('./routes/index');

let authRouter = require('./routes/auth');
let usersRouter = require('./routes/users');
let tokensRouter = require('./routes/tokens');
let rolesRouter = require('./routes/roles');

let measurementTypesRouter = require('./routes/measurementTypes');
let boardsRouter = require('./routes/boards');
let measurementsRouter = require('./routes/measurements');
let roomsRouter = require('./routes/rooms');
let presetsRouter = require('./routes/presets');
let localPresetsRouter = require('./routes/localPresets');

let arduinoRouter = require('./routes/arduino');


let app = express();
var cors = require('cors')

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


models.sequelize.sync().then(function(){
	console.log('Database connection up!');
}).catch(function(err){
	console.log(err, "Something went wrong during DB update");
});


app.use('/', indexRouter);

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/tokens', tokensRouter);
app.use('/roles', rolesRouter);

app.use('/measurementtypes', measurementTypesRouter);
app.use('/boards', boardsRouter);
app.use('/measurements', measurementsRouter);
app.use('/presets', presetsRouter);
app.use('/localPresets', localPresetsRouter);
app.use('/rooms', roomsRouter);

app.use('/arduino', arduinoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
Date.prototype.toJSON = function(){ return this.toLocaleString(); }

module.exports = app;