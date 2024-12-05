module.exports = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'nodestudent',  
        password: 'nodestudent',  
        database: 'instyle',  
    },
    migrations: {
        directory: './migrations',
    },
};
