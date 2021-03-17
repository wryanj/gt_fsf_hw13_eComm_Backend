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

  // Route go get all tags and associated product data-----------------------------------------
  router.get('/', async (req, res) => {
    try{
      const tagData = await Tag.findAll({
        include: Product
      }); 
      res.status(200).json(tagData);
    } 
    catch(err) {
      res.status(500).json(err);
    }
  });

  // Route to find a single tag by id and include its associated product data--------------------
  router.get('/:id', async (req, res) => {
    try{
      const tagData = await Tag.findByPk( req.params.id, {
        include: Product
      }); 
      res.status(200).json(tagData);
    } 
    catch(err) {
      res.status(500).json(err);
    }
  });

  // Route to create a new tag---------------------------------------------------------------------
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
