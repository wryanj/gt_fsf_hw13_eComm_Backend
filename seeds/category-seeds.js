//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Import the Category Model
  const { Category } = require('../models');

//----------------------------------------------------------------------------------------------
// DEFINE DATA TO INJECT (category_name column)
//----------------------------------------------------------------------------------------------
  
  // Define array of data to seed
  const categoryData = [
    {
      category_name: 'Shirts',
    },
    {
      category_name: 'Shorts',
    },
    {
      category_name: 'Music',
    },
    {
      category_name: 'Hats',
    },
    {
      category_name: 'Shoes',
    },
  ];

  // Create a functoin that bulk creates data using the array of data to seed
  const seedCategories = () => Category.bulkCreate(categoryData);

//----------------------------------------------------------------------------------------------
// EXPORT THE MODULE
//----------------------------------------------------------------------------------------------

  module.exports = seedCategories;
