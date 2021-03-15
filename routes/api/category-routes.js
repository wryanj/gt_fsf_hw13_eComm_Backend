//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Importing the express.router method
  const router = require('express').Router();

  // Importing the Category and Product Models from the models directory
  const { Category, Product } = require('../../models');

//----------------------------------------------------------------------------------------------
// DEFINE ROUTES FOR /api/categories endpoint - How does it know to use the.api/categories since I dont specify those in the path below?
//----------------------------------------------------------------------------------------------

  // Route enabling user to get all categories, and their associated products
  router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
  });

  // Route enabling users to find a category by id value, and get it's associated products
  router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
  });

  // Route enabling users to create a new category via post method
  router.post('/', (req, res) => {
    // create a new category
  });

  // Router enabling customers to update a category by id using a put method
  router.put('/:id', (req, res) => {
    // update a category by its `id` value
  });

  // Route enabling customers to delete a category by id using a delete method
  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
  });


//----------------------------------------------------------------------------------------------
// EXPORT THE ROUTER MODULE
//----------------------------------------------------------------------------------------------
  
  module.exports = router;
