exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Mediocre Iron Watch', priceInCents: 399 },
        { name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { name: 'Practical Copper Plate', priceInCents: 1000 },
        { name: 'Awesome Bronze Pants', priceInCents: 399 },
        { name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { name: 'Awesome Leather Shoes', priceInCents: 3990 }
      ])
    })
}
