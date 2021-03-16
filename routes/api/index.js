//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

    // Require express.router (an instance of router that is a complete middleware and routing system)
    const router = require('express').Router();

    // Require the category routes
    const categoryRoutes = require('./category-routes');

    // Require teh product Routes
    const productRoutes = require('./product-routes');

    // Require the tag routes
    const tagRoutes = require('./tag-routes');

//----------------------------------------------------------------------------------------------
// DEFINE MIDDLEWARE FOR THIS ROUTER INSTANCE
//----------------------------------------------------------------------------------------------

  /* 
    LEARNING COMMENTARY

    Similiar to app.use, router.use specifies a callback functoin to use anytime a request comes to or through the path
    specified in the first argument. What you are doing here is "mounting" this callback functoin to the path. 

    I believe this index.js within the api directory is being required on the index.js within the routes directory, which is how
    it is building the paths for the api endpoints eventually.

    So far in server.js, they .use "routes" which requires /routes (which I think is index.js within routes). Then in index.js within /routes, 
    it requires /api (which I believe is requiring this file, index.js within the api directory)

    Then below, in our middleware chain we are saying that now any path that makes it to /api, and uses /categories or /products must
    also require the categoryRoutes at ./category-routes or product routes at ./product routes etc...
    
  */

    // Any path that came to server, then had path /api, then has (here) /categories must require our category-routes file
    router.use('/categories', categoryRoutes);

    // Any path that came to server, then had path /api, then has (here) /products must require our product-routes file
    router.use('/products', productRoutes);

    // Any path that came to server, then had path /api, then has (here) /tags must require our tag-routes file
    router.use('/tags', tagRoutes);

//----------------------------------------------------------------------------------------------
// EXPORT THE ROUTER MODULE
//----------------------------------------------------------------------------------------------

    module.exports = router;
