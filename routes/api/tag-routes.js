//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------
  // Import express.router
  const router = require('express').Router();

  // Import Tag, Product, Product Tag models from the models directory
  const { Tag, Product, ProductTag } = require('../../models');

//----------------------------------------------------------------------------------------------
// DEFINE ROUTES FOR api/tags ENDPOINT
//----------------------------------------------------------------------------------------------

  // Route go get all tags and associated product data
  router.get('/', (req, res) => {
    // find all tags
    // be sure to include its associated Product data
  });

  // Route to find a single tag by id and include its associated product data
  router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
  });

  // Route to create a new tag
  router.post('/', (req, res) => {
    // create a new tag
  });

  // Route to update a tag's name by its id value
  router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
  });

  // Route to delete a tag by it's id value
  router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
  });

  //----------------------------------------------------------------------------------------------
  // EXPORT MODULES
  //----------------------------------------------------------------------------------------------

    module.exports = router;
