import dotenv from 'dotenv';
import express from 'express';
import MasterRouter from './routers/MasterRouter';
import bodyParser from "body-parser";


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
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

server.app.use('/', server.router);
server.app.set('view engine', 'ejs');
server.app.set('views','src/views');
server.app.use(express.static("src/public"));



// make server listen on some port
((port = process.env.APP_PORT || 5002) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();