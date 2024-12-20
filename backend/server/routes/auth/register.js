const express = require("express");
const bcrypt = require("bcrypt");
const sql = require("mssql");
const { pool, poolConnect } = require("../../db/db.js"); // Database connection

const router = express.Router();

// Handle POST request to /register
router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await poolConnect;
    const checkUser = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM Users WHERE email = @email");

    if (checkUser.recordset.length > 0) {
      return res.status(400).json({ message: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await pool
      .request()
      .input("username", sql.NVarChar, username)
      .input("email", sql.NVarChar, email)
      .input("password_hash", sql.NVarChar, passwordHash).query(`
        INSERT INTO Users (username, email, password_hash)
        VALUES (@username, @email, @password_hash)
      `);

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
