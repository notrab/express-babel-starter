const isDeveloping = (process.env.NODE_ENV != 'production')

if (isDeveloping) {
  require('dotenv').config();
}

require('./server');
