const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sql = require("mssql");
const { pool, poolConnect } = require("../../db/db.js"); // Assuming this is your database connection

const router = express.Router();

// POST request for user login
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Establish DB connection
    await poolConnect;

    // Query to find user by email
    const userResult = await pool
      .request()
      .input("email", sql.NVarChar, email) // Use the correct SQL data type for email
      .query("SELECT * FROM Users WHERE email = @email");

    const user = userResult.recordset[0]; // Assuming user data is in the first element

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if password matches the stored hash
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username }, // Payload
      process.env.JWT_SECRET, // Secret key for JWT
      { expiresIn: "1h" } // Token expiration time
    );

    // Send token to client
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
