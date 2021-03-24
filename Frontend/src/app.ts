import dotenv from 'dotenv';
import express from 'express';
import MasterRouter from './routers/MasterRouter';
import path from "path";


// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = MasterRouter;
}

// initialize server app
const server = new Server();

server.app.use('/', server.router);
server.app.set('view engine', 'ejs');
server.app.set('views','src/views');
server.app.use(express.static("src/public"));


// make server listen on some port
((port = process.env.APP_PORT || 5002) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();