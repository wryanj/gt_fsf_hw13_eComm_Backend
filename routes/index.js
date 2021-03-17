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

  // This is specifying that if anyone just comes to our site without the proper path, display some basic HTML telling them wrong route
    /*
      LEARNING COMMENTARY

      The way this works is that if I come to visit my app at any path besides the ones I specified in total, I get a wrong route message
      So using local host example, if I just come to 3001 at local host, I get this message. If I come to localhost:/3001/"anything besides api next..." 
      I will also get this message. 

      In this sense it is using this middleware saying if I detect a request to any path besides what I specified from my app port, give me this message

    */
  router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

//----------------------------------------------------------------------------------------------
// EXPORT THE MODULE
//----------------------------------------------------------------------------------------------

  module.exports = router;