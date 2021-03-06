const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const { restoreUser } = require('./auth');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const likesRouter = require('./routes/likes');
const followsRouter = require('./routes/follows');
const commentsRouter = require('./routes/comments')
const awsRouter = require('./routes/aws')
const { sessionSecret, environment } = require('./config')

const app = express();

app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));

const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    name: 'mooaLogin.sid',
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(restoreUser)
// create Session table if it doesn't already exist
store.sync();


app.use('/likes', likesRouter);
app.use('/follows', followsRouter);
app.use(usersRouter);
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use(commentsRouter)
app.use(awsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
