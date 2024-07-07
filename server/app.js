var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let UserRouter = require('./routes/admin/UserRouter')
const JWT = require('./utils/JWT')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 验证token
app.use((req, res, next) => {
  // 如果token有效，next()
  // 如果token过期了，返回401错误
  if (req.url === '/adminapi/user/login') {
    next();  // 如果是登录接口，直接next()
    return;
  }

  const token = req.headers['authorization'].split(" ")[1]
  if (token) {
    let payload = JWT.verify(token)
    if (payload) {
      // 如果token没有过期，返回新的token
      const newToken = JWT.generate({
        _id: payload._id,
        username: payload.username
      }, '20s')
      res.header('Authorization', newToken)
      next()
    } else {
      // 如果token过期了，返回401错误
      res.status(401).send({ code: -1, msg: 'token过期了' })
    }
  }
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(UserRouter)

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
