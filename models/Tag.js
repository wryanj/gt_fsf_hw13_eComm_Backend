//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Importing the model and DataTypes object from our instance of sequalize we created on connection.js
  const { Model, DataTypes } = require('sequelize');

  // Importing the sequalize instance we defined in connection.js
  const sequelize = require('../config/connection.js');

//----------------------------------------------------------------------------------------------
// DEFINE TAG MODEL 
//----------------------------------------------------------------------------------------------

  // Initialize Tag class by extending off Sequelize's Model class
  class Tag extends Model {}

  // Define the model (which will represent a table in your DB)
  Tag.init(
    {
      // id column
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      // tag name column
      tag_name: {
        type:DataTypes.INTEGER,
      }
    },
    // Define additional options for the model
    {
      sequelize,
      timestamps: false, // stops seqelize from creating timestamp columns automatically
      freezeTableName: true, // stops sequalize from pluralizing the table name
      underscored: true, // converts camelcase js into understocre separated with lower case in table names
      modelName: 'tag', // establishes the name of the model
    }
  );

//----------------------------------------------------------------------------------------------
// EXPORT PRODUCT CLASS FOR USE IN OTHER FILES
//----------------------------------------------------------------------------------------------

  module.exports = Tag;
