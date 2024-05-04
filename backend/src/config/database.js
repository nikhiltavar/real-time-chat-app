const { Sequelize } = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize({
  dialect: 'postgres', // Specify the dialect, in this case, Postgres
  host: 'localhost',    // Database host
  username: 'nikhil', // Your database username
  password: '12345@chat', // Your database password
  database: 'chat_app',      // Name of your database
  port: 5432,           // Port on which your database runs, default for Postgres is 5432
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Export the sequelize instance
module.exports = sequelize;
