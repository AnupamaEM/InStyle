const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'nodestudent', 
    password: 'nodestudent', 
    database: 'instyle'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the MySQL database!');
});


connection.query('SELECT * FROM dresses', (err, results) => {
    console.log('Results:', results);
});

const newDress ={name:'yellow dress',cost: 39.99,imagePath:'/images/red.jpg'};

connection.query('INSERT INTO dresses SET ?', newDress, (err, results) => {
    console.log('Inserted new dress with id:', results.insertId);  
});

connection.end();
