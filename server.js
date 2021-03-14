//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------
  // Import express library
  const express = require('express');
  // Importing items defined in ./routes directory
  const routes = require('./routes');
  // import sequelize connection

//----------------------------------------------------------------------------------------------
// ???
//----------------------------------------------------------------------------------------------

  // ??
  const app = express();
  const PORT = process.env.PORT || 3001;

  // Middleware definition to manage JSON parsing inbetween server-client exchange
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ??
  app.use(routes);

  // sync sequelize models to the database, then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
