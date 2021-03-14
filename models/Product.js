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

  // Initialize Product class by extending off Sequelize's Model class
  class Product extends Model {}

  // Define the model (which will represent a table in your DB)
  Product.init(
    {
      // id column
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      // product_name column
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      // price column
      price: {
        type: DataTypes.DECIMAL(6,2),
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },

      // stock (item availible stock) column
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isNumeric: true
        }
      },

      // category id referencing category id from category table
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'category',
          key: 'id'
        }
      }
    },
    // Define additional options for the model
    {
      sequelize,
      timestamps: false, // stops seqelize from creating timestamp columns automatically
      freezeTableName: true, // stops sequalize from pluralizing the table name
      underscored: true, // converts camelcase js into understocre separated with lower case in table names
      modelName: 'product', // establishes the name of the model
    }
  );

//----------------------------------------------------------------------------------------------
// EXPORT PRODUCT CLASS FOR USE IN OTHER FILES
//----------------------------------------------------------------------------------------------

  module.exports = Product;
