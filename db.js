const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "metro.proxy.rlwy.net",
  user: "root",
  password: "lXQQegnUhZjFPvKayKwDRdvoidEKnPgC",
  database: "railway",
  port: 28482,
  ssl: {
    rejectUnauthorized: false
  }
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Database connected successfully");
  }
});

module.exports = connection;