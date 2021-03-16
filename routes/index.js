//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Import express.router (which is a mini-app)
  const router = require('express').Router();

  // Import all routes defined within the api folder
  const apiRoutes = require('./api');

//----------------------------------------------------------------------------------------------
// DEFINE MIDDLEWARE SPECIFIC TO THIS ROUTER
//----------------------------------------------------------------------------------------------

  /* 
    LEARNING COMMENTARY
    Similiar to app.use, router.use specifies a callback functoin to use anytime a request comes to or through the path
    specified in the first argument. What you are doing here is "mounting" this callback functoin to the path. 

    In example below, all requests that come to or through /api will require apiRoutes as defined above
  */


  // Specifying that any request with /api in path require/api directory
  router.use('/api', apiRoutes);

  // ??
  router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

//----------------------------------------------------------------------------------------------
// EXPORT THE MODULE
//----------------------------------------------------------------------------------------------

  module.exports = router;