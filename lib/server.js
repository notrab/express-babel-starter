import express from 'express';
import * as routes from './routes';

const app = express();

const isDeveloping = (process.env.NODE_ENV != 'production')

if (isDeveloping) {
  require('./logger')(app);
}

require('./config')(app);
app.use('/', routes.pages);
app.use('/users', routes.users);
require('./http')(app);

module.exports = app;
