//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  const { Tag } = require('../models');

//----------------------------------------------------------------------------------------------
// DEFINE DATA TO INJECT (product_name, price, stock, category id
//----------------------------------------------------------------------------------------------

  // Create array of tag objects 
  const tagData = [
    {
      tag_name: 'rock music',
    },
    {
      tag_name: 'pop music',
    },
    {
      tag_name: 'blue',
    },
    {
      tag_name: 'red',
    },
    {
      tag_name: 'green',
    },
    {
      tag_name: 'white',
    },
    {
      tag_name: 'gold',
    },
    {
      tag_name: 'pop culture',
    },
  ];

  // Create functoin to bulk create tag data
  const seedTags = () => Tag.bulkCreate(tagData);

//----------------------------------------------------------------------------------------------
// EXPORT THE MODULE
//----------------------------------------------------------------------------------------------

  module.exports = seedTags;
