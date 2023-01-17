const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'GraphicsCards',
  },
  {
    category_name: 'CPU',
  },
  {
    category_name: 'Ram',
  },
  {
    category_name: 'MotherBoard',
  },
  {
    category_name: 'Monitor',
  },
  {
    category_name: 'Keyboard',
  },
  {
    category_name: 'Mouse',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;