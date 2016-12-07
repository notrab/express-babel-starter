module.exports = app => {
  app.disable('x-powered-by');
  app.set('port', process.env.PORT || 3000);
  app.set('view engine', 'pug')
}
