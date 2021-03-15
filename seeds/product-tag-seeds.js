//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Import the ProductTag model
  const { ProductTag } = require('../models');

//----------------------------------------------------------------------------------------------
// DEFINE DATA TO INJECT (product_name, price, stock, category id
//----------------------------------------------------------------------------------------------

  // Define and array of productTag objects
  const productTagData = [
    {
      product_id: 1,
      tag_id: 6,
    },
    {
      product_id: 1,
      tag_id: 7,
    },
    {
      product_id: 1,
      tag_id: 8,
    },
    {
      product_id: 2,
      tag_id: 6,
    },
    {
      product_id: 3,
      tag_id: 1,
    },
    {
      product_id: 3,
      tag_id: 3,
    },
    {
      product_id: 3,
      tag_id: 4,
    },
    {
      product_id: 3,
      tag_id: 5,
    },
    {
      product_id: 4,
      tag_id: 1,
    },
    {
      product_id: 4,
      tag_id: 2,
    },
    {
      product_id: 4,
      tag_id: 8,
    },
    {
      product_id: 5,
      tag_id: 3,
    },
  ];

  // Create a functoin to bulk create these items
  const seedProductTags = () => ProductTag.bulkCreate(productTagData);

//----------------------------------------------------------------------------------------------
// EXPORT THE MODULE
//----------------------------------------------------------------------------------------------

  module.exports = seedProductTags;
