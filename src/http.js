import {Server} from 'http';

module.exports = app => {
  const httpServer = Server(app);

  httpServer.listen(app.get('port'));
  httpServer.on('listening', () => {
    console.log(`🌎  Listening at http://localhost:${app.get('port')}`);
  });
}
