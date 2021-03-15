//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Require dotenv for use of env file for db name, user name and pw
  require('dotenv').config();

  // Require Sequalize (Capital S implies we refer here to the library itself. This is what we require here)
  const Sequelize = require('sequelize');

//----------------------------------------------------------------------------------------------
// ESTABLISH DB CONNECTION VIA CREATION OF A SEQULIZE INSTANCE
//----------------------------------------------------------------------------------------------

  // Define new instance of sequalize (lower case s implies we are defining an instance of sequalize which represents a connection to our DB)
  const sequelize = new Sequelize(

    // Pass in db, un and pw parameters to Sequalize Constructor (using .env to mask sensitive data)
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,

    // Specify host, dialect (using mySQL) and port of your local server
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );

//----------------------------------------------------------------------------------------------
// EXPORT CREATED SEQUALIZE OBJECT
//----------------------------------------------------------------------------------------------

  // Exporting sequlize (which is an instance of Sequalize object) so we can use its methods and properties in other files...
  module.exports = sequelize;
