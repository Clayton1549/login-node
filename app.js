const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const pageRouter = require('./routes/page.js');
const editRouter = require('./routes/edite.js');
const update = require('./routes/update.js');
const deletar = require('./routes/delete.js');
const processamento = require("./routes/process.js");
const arquivoText = require("./result/developer.js");
const results = require("./result/res.js");
const eventPost = require("./routes/eventPost.js");
const logout = require("./routes/logout.js");
const cdrouter = require("./routes/cadastro.js");
const userConta = require("./routes/contauser.js");
const excluirUser = require("./routes/excluirUser.js");
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// view engine setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/page' , pageRouter);
app.use('/edite' , editRouter );
app.use('/update',update );
app.use('/f',processamento);
app.use('/eventPost',eventPost);
app.use('/logout',logout);
app.use('/cadastro',cdrouter);
app.use('/conta',userConta);
app.use('/delete',deletar);
app.use('/excluirUser',excluirUser);

 // Proteção de rotas , somente logado
app.use('/enviosForm', (req, res) => {
  if (!req.session.user) {
    //return res.status(401).json({ message: 'Unauthorized ,você de estar logado !' });
    res.redirect('/');
  }
   //res.json({ message: 'Profile accessed', user: req.session.user });
    res.render('enviosForm',{ Username:req.session.user });
});


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