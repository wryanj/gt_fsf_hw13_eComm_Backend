//----------------------------------------------------------------------------------------------
// IMPORT DEPENDENCIES
//----------------------------------------------------------------------------------------------

  // Import all models created in the models directory
  const Product = require('./Product');
  const Category = require('./Category');
  const Tag = require('./Tag');
  const ProductTag = require('./ProductTag');

//----------------------------------------------------------------------------------------------
// DEFINE MODEL ASSOCIATIONS
//----------------------------------------------------------------------------------------------

  // A product belongs to a category (1-1). Adds a foreign key to the source (Product)
  Product.belongsTo(Category, {
    foreignKey: 'category_id'
  });

  // A category has many products in it (M-1). Adds a foreign key to the target (Product))
  Category.hasMany(Product, {
    foreignKey: 'category_id',
  })

  // A product may have many tags (M-M) and a tag may have many products
  Product.belongsToMany(Tag, {
     through: ProductTag 
  });

  Tag.belongsToMany(Product, {
    through:ProductTag 
  });

  /*
    LEARNING COMMENTARY

    ProductTag in through is specifying the through table (aka junction table). This means that there is a single model (ProductTag)
    created with two columns (unless already specified), one for tagID and one for ProductID

    What this lets us do is easily get a product, and see all of its associated tags in the JSON response, or easily get a tag and 
    see all of its associated products
  */

//----------------------------------------------------------------------------------------------
// EXPORT MODELS FOR USE IN OTHER JS FILES
//----------------------------------------------------------------------------------------------

  module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };
