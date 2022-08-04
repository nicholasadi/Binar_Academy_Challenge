if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('express-flash');
// const passport = require('./lib/passport-local')
const passport = require('./lib/passport-jwt')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const swaggerJSON = require('./Documentation.json');
const swaggerUI = require('swagger-ui-express');

const app = express();

// app.use(session({
//   secret: "rahasia",
//   resave: false,
//   saveUninitialized: false
// }));

app.use(passport.initialize());
// app.use(passport.session());

app.use(cookieParser())

// app.use(flash())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerJSON))

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.status(err.status || 500).send({message: err.message})
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
