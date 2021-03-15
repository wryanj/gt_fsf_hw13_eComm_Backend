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

    // ?? What doing here with these exactly
    router.use('/categories', categoryRoutes);

    // ?? What doing here with these exactly
    router.use('/products', productRoutes);

    // ?? What doing here with these exactly
    router.use('/tags', tagRoutes);

//----------------------------------------------------------------------------------------------
// EXPORT THE ROUTER MODULE
//----------------------------------------------------------------------------------------------

    module.exports = router;
