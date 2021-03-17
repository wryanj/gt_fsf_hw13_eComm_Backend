//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------
  // Require express.router
  const router = require('express').Router();

  // Import the Product, Category, Tag and Product Tag Models
  const { Product, Category, Tag, ProductTag } = require('../../models');

//----------------------------------------------------------------------------------------------
// DEFINE ROUTES FOR /api/products endpoint 
//----------------------------------------------------------------------------------------------

  // Route to get all products and their associated category and tag data -------------------------
  router.get('/',  async (req, res) => {
    try{
      const productData = await Product.findAll({
        include:[
          {
            model: Category
          },
          {
            model: Tag,
          }
        ]
      }); 
      res.status(200).json(productData);
    } 
    catch(err) {
      res.status(500).json(err);
    }
  });

  // Route to get a single product by id with associated category and Tag data --------------------
  router.get('/:id', async (req, res) => {
    try{
      const productData = await Product.findByPk( req.params.id,{
        include:[
          {
            model: Category
          },
          {
            model: Tag,
          }
        ]
      }); 
      res.status(200).json(productData);
    } 
    catch(err) {
      res.status(500).json(err);
    }
  });

  // Route to create new product--------------------------------------------------------------------
  router.post('/', (req, res) => {

    // Request body format should come in as per below
      /* 
        {
          "product_name": "Basketball",
          "price": 200.00,
          "stock": 3,
          "tagIds": [1, 2, 3, 4]
        }
      */

    // Create a new product using the req.body..
    Product.create(req.body)
      // Then take the created product...
      .then((product) => {
        // And if there's product tags, create pairings to bulk create in the ProductTag model
        if (req.body.tagIds.length) {
          const productTagIdArr = req.body.tagIds.map((tag_id) => {
            return {
              product_id: product.id,
              tag_id,
            };
          });
          return ProductTag.bulkCreate(productTagIdArr);
        }
        // if no product tags, just respond
        res.status(200).json(product);
      })
      // Then, send a message success back and the product tag id in json
      .then((productTagIds) => res.status(200).json(productTagIds))
      // If there is an error, log it and provide the error back as json to client
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });

  });

  // Route to update product by id --------------------------------------------------------------------
  router.put('/:id', (req, res) => {

    // Update the product where the product is on the line with the submitted id parameter
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      // Then find all tags associated with that product
      .then((product) => {
        return ProductTag.findAll({ where: { product_id: req.params.id } });
      })
      // Then take the response of last .thn (all the product tags associated with the product id)...
      .then((productTags) => {
        // Get list of current tag_ids
        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        // Create filtered list of new tag_ids
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });
        // Figure out which ones to remove
        const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
        // Run both actions (create and destroy)
        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);

      })
      // Then take the updated tags and respond to the client with json of them
      .then((updatedProductTags) => res.json(updatedProductTags))
      // If there is an error send the 400 status and error in json
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });

  // Route to delete a single product by its id------------------------------------------------------------
  router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
  });


//----------------------------------------------------------------------------------------------
// EXPORT THE ROUTER MODULE
//----------------------------------------------------------------------------------------------

  module.exports = router;
