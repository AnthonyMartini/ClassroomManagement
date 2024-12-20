const express = require("express");
const router = express.Router();
const sql = require("mssql");
const { pool, poolConnect } = require("../db/db.js");
const authenticateToken = require("../middleware/authenticate.js");

/* GET student data by ID */
router.get("/", authenticateToken, async function (req, res) {
  const studentID = req.query.ID; // Get student ID from query params

  if (!studentID) {
    return res.status(400).json({ error: "Student ID is required" });
  }

  try {
    // Wait for the pool to connect before querying
    await poolConnect;

    // Query to fetch student data by ID
    const query = `
      SELECT * FROM [dbo].[Students]
      WHERE studentID = @studentID
    `;
    const result = await pool
      .request()
      .input("studentID", sql.Int, studentID) // Pass studentID as parameter
      .query(query);

    if (result.recordset.length === 0) {
      return res
        .status(404)
        .json({ message: "No student found with the specified ID." });
    }

    res.json(result.recordset[0]); // Return student data
  } catch (err) {
    console.error("Database query error:", err.message);
    res
      .status(500)
      .json({ error: "An error occurred while querying the database." });
  }
});

module.exports = router;
