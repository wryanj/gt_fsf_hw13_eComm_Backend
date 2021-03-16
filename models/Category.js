//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Importing the model and DataTypes object from our instance of sequalize we created on connection.js
  const { Model, DataTypes, INTEGER } = require('sequelize'); 

  // Importing the sequalize instance we defined in connection.js
  const sequelize = require('../config/connection.js');

//----------------------------------------------------------------------------------------------
// DEFINE CATEGORY MODEL 
//----------------------------------------------------------------------------------------------

 // Initialize Product model (table) by extending off Sequelize's Model class
  class Category extends Model {}

  // Define the model (which will represent a table in your DB)
  Category.init(

    // Define attributes representing table columns and properties in SQL...
    {
      // id Column with specified attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      // category_name column with sepcified attributes
      category_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    // Define additional options for the model
    {
      sequelize, // Pass the connection instance
      timestamps: false, // Sepcifieds not to add any timestamp options to table (createdAT, UpdatedAT)
      freezeTableName: true, // This stops sequalize from pluralizing the table name. Leaves it as 'Category'
      underscored: true, // Specifies to convert our JS camel case to separate by underscore in the actual table
      modelName: 'category', // specifies the table name as category...
    }
  );

//----------------------------------------------------------------------------------------------
// EXPORT CATEGORY CLASS FOR USE IN OTHER FILES
//----------------------------------------------------------------------------------------------

  module.exports = Category;
