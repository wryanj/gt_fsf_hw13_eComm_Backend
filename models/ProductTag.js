//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Importing the model and DataTypes object from our instance of sequalize we created on connection.js  
  const { Model, DataTypes } = require('sequelize');

  // Importing the sequalize instance we defined in connection.js
  const sequelize = require('../config/connection');

//----------------------------------------------------------------------------------------------
// DEFINE CATEGORY MODEL 
//----------------------------------------------------------------------------------------------

  // Initialize ProductTag Class by extending off Sequelize's Model class
  class ProductTag extends Model {}

  // Define the model (which will represent a table in your DB)
  ProductTag.init(

    // Define attributes representing table columns and properties in SQL...
    {
      // id Column with specified attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      // product id column that references the product id from the product model
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
          key: 'id'
        }
      },

       // tag id column that references the tag id from the tag model
       tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id'
        }
      }
    },
    // Define additional options for model
    {
      sequelize, // Pass the connection instance
      timestamps: false, // Sepcifieds not to add any timestamp options to table (createdAT, UpdatedAT)
      freezeTableName: true, // This stops sequalize from pluralizing the table name. Leaves it as 'Category'
      underscored: true, // Specifies to convert our JS camel case to separate by underscore in the actual table
      modelName: 'product_tag', // specifies the table name as category...
    }
  );

//----------------------------------------------------------------------------------------------
// EXPORT CATEGORY CLASS FOR USE IN OTHER FILES
//----------------------------------------------------------------------------------------------

  module.exports = ProductTag;
