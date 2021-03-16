//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Import all the seed data functions created in this directory
  const seedCategories = require('./category-seeds');
  const seedProducts = require('./product-seeds');
  const seedTags = require('./tag-seeds');
  const seedProductTags = require('./product-tag-seeds');

  // Import the database connection instance from connection / config
  const sequelize = require('../config/connection');

//----------------------------------------------------------------------------------------------
// DEFINE SINGLE ASYNC FUNCTION FOR SEEDING THE ENTIRE DATABASE
//----------------------------------------------------------------------------------------------

  const seedAll = async () => {
    
    // Force true adds a drop table if exists- so it will override any existing data I have in there. 
    // Every time I run this seedAll function it will overwrite my existing table and refresh it with my latest models, then the data in my seed files
    await sequelize.sync({ force: true }); 
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
  };

//----------------------------------------------------------------------------------------------
// EXECUTE THE SEED ALL FUNCTION
//----------------------------------------------------------------------------------------------

  seedAll();
