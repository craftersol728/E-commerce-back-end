const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Computer',
      },
      {
        tag_name: 'Laptop',
      },
      {
        tag_name: 'Good',
      },
      {
        tag_name: 'Bad',
      },
      {
        tag_name: 'Meh',
      },
      {
        tag_name: 'Amazing',
      },
      {
        tag_name: 'Fast',
      },
      {
        tag_name: 'Slow',
      },
    ];
    
    const seedTags = () => Tag.bulkCreate(tagData);
    
    module.exports = seedTags;