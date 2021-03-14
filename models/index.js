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
    foreignKey: 'category_id'
  })

  // A product may have many tags (M-M) and a tag may have many products
  Product.belongsToMany(Tag, {through: ProductTag});
  Tag.belongsToMany(Product, {through:ProductTag});


//----------------------------------------------------------------------------------------------
// EXPORT MODELS FOR USE IN OTHER JS FILES
//----------------------------------------------------------------------------------------------

  module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };
