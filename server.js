//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Import express library
  const express = require('express');

  // Importing ./routes
  const routes = require('./routes');

  // Import the Sequalize Connection
  const sequelize = require('./config/connection');

//----------------------------------------------------------------------------------------------
// DEFINE EXPRESS OBJET AND SPECIFY PORT
//----------------------------------------------------------------------------------------------

  // Define Express Object
  const app = express();

  // Define Port For Listning (and specify in way that works for heroku later)
  const PORT = process.env.PORT || 3001;

//----------------------------------------------------------------------------------------------
// DEFINE MIDDLEWARE FOR SERVER
//----------------------------------------------------------------------------------------------

  /*
    LEARNING COMMENTARY
    app.use is a method to mount middleware to a path. If no path is provided (such as the examples seen below), then the middleware
    function will be executed on EVERY request to this application. 

    Syntax for app.use is:
    app.use([path], callback [,callback....])

    The path as noted is omitted will just mean "do this callback middleware function every time a request is made to app"
    Otherwise, its mounting a certain middleware callback function to the path you specify so that every time a request comes through that path
    the callback is used. Example if I mounted a middleware function to /apple, that function will get used for paths /apple, and /apple/otherpaths..

    So, below we are saying any time a request comes to this app use express.json middlewware function and exprez.urlencoded...

    In addition, any time a request comes to this server we are requiring ./routes.

    Refresher- middleware is just some code that gets a client request prior to your server handler and does some things to it. Middleware functions
    are executed sequentially also so order by which you define them matters!

  */

  // Middleware definition to manage JSON & url Encoded Parsing in between client-server exchange
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Turn on routes
  app.use(routes); // Not totally sure what this is doing still?

//----------------------------------------------------------------------------------------------
// SYNC SEQUELIZE MODELS AND TURN ON SERVER
//----------------------------------------------------------------------------------------------

  // Sync sequelize models to the database, then turn on the server (force false means it will not drop the table if exists)
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listning on port ${PORT}`));
  });
