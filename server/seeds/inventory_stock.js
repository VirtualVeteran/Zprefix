exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('inventory_stock').del();

  // Insert new data
  await knex('inventory_stock').insert([
    { itemname: 'Ceramic Vase', user_account_id: 1, description: 'Beautiful hand-painted ceramic vase', quantity: 10 },
    { itemname: 'Throw Pillow', user_account_id: 2, description: 'Soft and cozy decorative throw pillow', quantity: 20 },
    { itemname: 'Wall Clock', user_account_id: 3, description: 'Vintage-style wall clock with Roman numerals', quantity: 15 },
    { itemname: 'Table Lamp', user_account_id: 4, description: 'Modern table lamp with adjustable brightness', quantity: 12 },
    { itemname: 'Area Rug', user_account_id: 5, description: 'Large area rug in geometric pattern', quantity: 8 },
    { itemname: 'Picture Frame', user_account_id: 6, description: 'Wooden picture frame for 8x10 photos', quantity: 25 },
    { itemname: 'Bookshelf', user_account_id: 7, description: 'Sturdy wooden bookshelf with adjustable shelves', quantity: 10 },
    { itemname: 'Desk Chair', user_account_id: 8, description: 'Comfortable ergonomic desk chair with lumbar support', quantity: 7 },
    { itemname: 'Coffee Table', user_account_id: 9, description: 'Modern glass coffee table with metal legs', quantity: 18 },
    { itemname: 'Television', user_account_id: 10, description: 'Smart TV with 4K resolution and built-in streaming apps', quantity: 5 },
    { itemname: 'Dining Table', user_account_id: 11, description: 'Solid wood dining table with extendable leaf', quantity: 12 },
    { itemname: 'Sofa', user_account_id: 12, description: 'Plush sofa with reclining seats and cup holders', quantity: 6 },
    { itemname: 'Bar Stools', user_account_id: 13, description: 'Set of four adjustable bar stools with swivel seats', quantity: 10 },
    { itemname: 'Kitchen Utensil Set', user_account_id: 14, description: 'Stainless steel kitchen utensil set with hanging rack', quantity: 15 },
    { itemname: 'Throw Blanket', user_account_id: 15, description: 'Cozy fleece throw blanket in assorted colors', quantity: 30 },
    { itemname: 'Plant Pot', user_account_id: 16, description: 'Ceramic plant pot with drainage hole and saucer', quantity: 20 },
    { itemname: 'Cookware Set', user_account_id: 17, description: 'Non-stick cookware set with pots and pans', quantity: 8 },
    { itemname: 'Toaster Oven', user_account_id: 18, description: 'Compact toaster oven with multiple cooking functions', quantity: 12 },
    { itemname: 'Bedside Table', user_account_id: 19, description: 'Nightstand with drawer and shelf for storage', quantity: 14 },
    { itemname: 'Shower Curtain', user_account_id: 20, description: 'Waterproof fabric shower curtain with decorative print', quantity: 25 }
  ]);
};
