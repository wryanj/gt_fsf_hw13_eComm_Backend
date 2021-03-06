//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Importing the express.router method
  const router = require('express').Router();

  // Importing the Category and Product Models from the models directory
  const { Category, Product } = require('../../models');

//----------------------------------------------------------------------------------------------
// DEFINE ROUTES FOR /api/categories ENDPOINT 
//----------------------------------------------------------------------------------------------

  /* 
    LEARNING COMMENTARY

    The reason that the paths in the code below specified as "/" or "/:id" are actually the paths for /api/categories is that those routes 
    were built up from the server js file to keep things modular. The sequence went as such:

      On server.js, defined within the middleware for any request coming to this appliaction is to app.use routes, which is requiring index.js
      within the routes directory any time a request is coming to this app.

      Witin index.js in routes directory it specifies router.use('/api', apiRoutes). apiRoutes is just requiring index.js within the api directory, so its saying
      for anything that comes with a /api path, require index.js in api directory. 

      Within index.js in api directory, it specifies router.use('/categories', categoryRoutes). categoryRoutes is just requiring ./category-route which is this file, 
      with these handler functoins defined below. From here, we specify things to do for anything that comes to this path, or anything that comes to this path with an id specified in req.params

  */

  // Route enabling user to get all categories, and their associated products--------------------------
    router.get('/', async (req, res) => {
      try{
        const categoryData = await Category.findAll({
          include: Product
        }); 
        res.status(200).json(categoryData);
      } 
      catch(err) {
        res.status(500).json(err);
      }
    });

  // Route enabling users to find a category by id value, and get it's associated products---------------
    router.get('/:id', async (req, res) => {
      try{
        const categoryData = await Category.findByPk( req.params.id, {
          include: Product
        }); 
        res.status(200).json(categoryData);
      } 
      catch(err) {
        res.status(500).json(err);
      }
    });

  // Route enabling users to create a new category via post method----------------------------------------
    // Request Body
      /* 
        {
          "category_name": "Category"
        }
      */

    // Route
    router.post('/', async (req, res) => {
      try{
        const newCategoryData = await Category.create(req.body);
        res.status(200).json(newCategoryData);
      }
      catch(err){
        res.status(500).json(err);
      }
    });

  // Router enabling customers to update a category by id using a put method-------------------------------
    // Request Body
      /* 
        {
          "category_name": "Updated Category"
        }
      */
    
    // Route
    router.put('/:id', async (req, res) => {
      try{
        await Category.update(
          {category_name: req.body.category_name},
          {where: {id: req.params.id}}
        )
        res.status(200).send("Category Updated Successfully!");
      }
      catch(err){
        res.status(500).json(err);
      }
    });

  // Route enabling customers to delete a category by id using a delete method----------------------------
    router.delete('/:id', async (req, res) => {
      try{
        await Category.destroy(
          {where: {id: req.params.id}}
        )
        res.status(200).send("Category Deleted Successfully");
      }
      catch(err){
        res.status(500).json(err);
      }
    });

     /*
      NOTE

      I did not cascade this intentionally as it was not specified in the HW. So, 
      if categories are deleted some products hvae null here and would need to be deleted, 
      Or potentially just re-assigned

    */



//----------------------------------------------------------------------------------------------
// EXPORT THE ROUTER MODULE
//----------------------------------------------------------------------------------------------
  
  module.exports = router;
