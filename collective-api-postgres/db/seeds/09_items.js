exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('items').insert([
        { product_id: 1, quantity: 1 },
        { product_id: 2, quantity: 2 },
        { product_id: 3, quantity: 1 },
        { product_id: 4, quantity: 4 },
        { product_id: 5, quantity: 1 },
        { product_id: 6, quantity: 3 },
        { product_id: 7, quantity: 1 },
        { product_id: 8, quantity: 6 },
        { product_id: 9, quantity: 1 }
      ])
    })
}
