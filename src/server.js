import express from 'express';
import * as routes from './routes';

const app = express();

require('./config')(app);
require('./logger')(app);
app.use('/users', routes.users);
require('./http')(app);

module.exports = app;
