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
    // Request Body
          /* 
            {
              "tag_name": "New Tag"
            }
          */

        // Route
        router.post('/', async (req, res) => {
          try{
            const newTagData = await Tag.create(req.body);
            res.status(200).json(newTagData);
          }
          catch(err){
            res.status(500).json(err);
          }
        });

  // Route to update a tag's name by its id value----------------------------------------------------
    // Request Body
          /* 
            {
              "tag_name": "New Tag"
            }
          */

    // Route
    router.put('/:id', async (req, res) => {
      try{
        await Tag.update(
          {tag_name: req.body.tag_name},
          {where: {id: req.params.id}}
        )
        res.status(200).send("Tag Updated Successfully");
      }
      catch(err){
        res.status(500).json(err);
      }
    });

  // Route to delete a tag by it's id value-------------------------------------------------------------
  router.delete('/:id', async (req, res) => {
    try{
      await Tag.destroy(
        {where: {id: req.params.id}}
      )
      res.status(200).send("Tag Deleted Successfully");
    }
    catch(err){
      res.status(500).json(err);
    }
  });

  //----------------------------------------------------------------------------------------------
  // EXPORT MODULES
  //----------------------------------------------------------------------------------------------

    module.exports = router;
