const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES LINKED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS IPORTED -----\n');

  await seedTags();
  console.log('\n----- TAGS CONNECTED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS REGISTERED -----\n');

  process.exit(0);
};

seedAll();