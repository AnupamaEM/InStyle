const knex = require('knex');

const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'nodestudent',
    password: 'nodestudent',
    database: 'instyle',
  },
 
});

// Fetch all dresses

db('dresses')
  .select('*')
  .then((results) => {
    console.log('Results:', results);
  })
  .catch((err) => {
    console.error('something went wrong cant fetch products', err.message);
  });

// Insert a new dress
const newDress = { name: 'grey Dress', cost: 19, imagePath: '/images/black.jpg' };

db('dresses')
  .insert(newDress)
  .then((id) => {
    console.log('insertion done :', newDress);
  })
  .catch((err) => {
    console.error('insertion failed for new dress:', err.message);
  });




