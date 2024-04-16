exports.seed = async function(knex) {

      // Inserts seed entries
     await knex('inventory_stock').insert([
        {name: 'Ceramic Vase', description: 'Beautiful hand-painted ceramic vase', quantity: 10},
        {name: 'Throw Pillow', description: 'Soft and cozy decorative throw pillow', quantity: 20},
        {name: 'Wall Clock', description: 'Vintage-style wall clock with Roman numerals', quantity: 15},
        {name: 'Table Lamp', description: 'Modern table lamp with adjustable brightness', quantity: 12},
        {name: 'Area Rug', description: 'Large area rug in geometric pattern', quantity: 8},
        {name: 'Picture Frame', description: 'Wooden picture frame for 8x10 photos', quantity: 25},
        // Add more items as needed
  ]);
};
