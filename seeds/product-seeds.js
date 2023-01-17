const { Product } = require('../models');
const productData = [
    {
      product_name: 'GTX 4090ti',
      price: 1499,
      stock: 14,
      category_id: 1,
    },
    {
      product_name: 'View Sonic monitor',
      price: 900.0,
      stock: 25,
      category_id: 5,
    },
    {
      product_name: 'The best mother board',
      price: 2299,
      stock: 12,
      category_id: 4,
    },
    {
      product_name: 'DDR5 600 gb Ram',
      price: 399,
      stock: 50,
      category_id: 3,
    },
    {
      product_name: 'I7 processecor',
      price: 800,
      stock: 22,
      category_id: 2,
    },
    {
    product_name: 'Moon Lander',
    price: 400,
    stock: 22,
    category_id: 6,
    },
    {
    product_name: 'Final Mouse',
    price: 200,
    stock: 22,
    category_id: 7,
    },
  ];
  
  const seedProducts = () => Product.bulkCreate(productData);
  
  module.exports = seedProducts;