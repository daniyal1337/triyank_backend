const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database NOT connected:", err.message);
  } else {
    console.log("✅ Database Connected Successfully!");
    console.log("DB USER:", process.env.DB_USER);
  }
});

module.exports = db;
