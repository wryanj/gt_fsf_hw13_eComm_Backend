//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Import express library
  const express = require('express');

  // Importing items defined in ./routes directory - which routes am I importing? I export a ton of versions not getting that
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
// DEFINE MIDDLEWARE
//----------------------------------------------------------------------------------------------

  // Middleware definition to manage JSON & url Encoded Parsing in between client-server exchange
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Turn on routes
  app.use(routes);

//----------------------------------------------------------------------------------------------
// SYNC SEQUELIZE MODELS AND TURN ON SERVER
//----------------------------------------------------------------------------------------------

  // Sync sequelize models to the database, then turn on the server
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listning on port ${PORT}`));
  });
