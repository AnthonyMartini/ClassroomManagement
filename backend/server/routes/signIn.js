const express = require("express");
const router = express.Router();
const sql = require("mssql");
const { pool, poolConnect } = require("../db/db.js");

/* GET sign-in data by student ID */
router.get("/", async function (req, res) {
  const studentID = req.query.ID; // Get student ID from query params

  if (!studentID) {
    return res.status(400).json({ error: "Student ID is required" });
  }

  try {
    // Wait for the pool to connect before querying
    await poolConnect;

    // Query to fetch student data by ID
    const studentQuery = `
      SELECT *
      FROM [dbo].[Students]
      WHERE studentID = @studentID
    `;
    const studentResult = await pool
      .request()
      .input("studentID", sql.Int, studentID) // Pass studentID as parameter
      .query(studentQuery);

    if (studentResult.recordset.length === 0) {
      return res
        .status(404)
        .json({ message: "No student found with the specified ID." });
    }

    const studentData = studentResult.recordset[0];

    // Query to fetch district data using districtID
    const districtQuery = `
      SELECT *
      FROM [dbo].[Districts]
      WHERE districtID = @districtID
    `;
    const districtResult = await pool
      .request()
      .input("districtID", sql.Int, studentData.districtID)
      .query(districtQuery);

    if (districtResult.recordset.length === 0) {
      return res
        .status(404)
        .json({ message: "No district found for the student." });
    }

    const districtData = districtResult.recordset[0];

    // Query to fetch classes the student is enrolled in
    const classesQuery = `
      SELECT *
      FROM [dbo].[ClassEnrollment]
      WHERE studentID = @studentID
    `;
    const classesResult = await pool
      .request()
      .input("studentID", sql.Int, studentID)
      .query(classesQuery);

    // Prepare the classes data
    const classesData = classesResult.recordset;

    // Return both student, district, and classes data
    res.json({
      student: studentData,
      district: districtData,
      classes: classesData,
    });
  } catch (err) {
    console.error("Database query error:", err.message);
    res
      .status(500)
      .json({ error: "An error occurred while querying the database." });
  }
});

module.exports = router;
