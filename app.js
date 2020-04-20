var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var userRouter = require('./routes/user.routes');
var projectRouter = require('./routes/project.routes');
var taskRouter = require('./routes/task.routes');
var aasignRouter = require('./routes/assign.routes');
var DesignationRouter = require('./routes/desingation.routes');
var EODRouter = require('./routes/EOD.routes');
var AttendenceRouter = require('./routes/attendence.routes');
var TestingRouter = require('./routes/testing.routes');
var TaskRedoRouter = require('./routes/taskredo.routes');
var app = express();

//Databaseconnection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/workbox')
    .then(()=>console.log("DB server connect"))
    .catch(e => console.log("DB error", e));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/projects',projectRouter);
app.use('/task',taskRouter);
app.use('/assign', aasignRouter);
app.use('/desgination', DesignationRouter);
app.use('/EOD', EODRouter);
app.use('/attendence', AttendenceRouter);
app.use('/taskredo', TaskRedoRouter);
app.use('/testing', TestingRouter);

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

module.exports = app;