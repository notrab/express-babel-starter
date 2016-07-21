import logger from 'morgan';

module.exports = app => {
  app.use(logger('dev'));
}
