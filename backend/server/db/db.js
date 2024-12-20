const sql = require("mssql");
require("dotenv").config();

// SQL Server configuration
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true, // Use encryption for Azure SQL
  },
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

module.exports = {
  pool,
  poolConnect,
};
