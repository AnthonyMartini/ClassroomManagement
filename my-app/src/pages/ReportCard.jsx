import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function ReportCard() {
  // Sample data for academic years and grades
  const academicYears = ["2023-2024", "2024-2025", "2025-2026"];

  // Sample grades data for different classes and quarters
  const gradesData = {
    "2023-2024": [
      { className: "Math", Q1: "A", Q2: "B+", Q3: "A-", Q4: "B" },
      { className: "Science", Q1: "B", Q2: "A", Q3: "A", Q4: "A+" },
      { className: "History", Q1: "C+", Q2: "B", Q3: "B-", Q4: "C" },
    ],
    "2024-2025": [
      { className: "Math", Q1: "A-", Q2: "A", Q3: "A+", Q4: "A" },
      { className: "Science", Q1: "B", Q2: "B+", Q3: "A-", Q4: "A" },
      { className: "History", Q1: "B", Q2: "B", Q3: "B+", Q4: "B" },
    ],
    "2025-2026": [
      { className: "Math", Q1: "A", Q2: "A-", Q3: "A", Q4: "A" },
      { className: "Science", Q1: "A-", Q2: "A", Q3: "A-", Q4: "A+" },
      { className: "History", Q1: "B", Q2: "C+", Q3: "B-", Q4: "C+" },
    ],
  };

  // State for selected academic year
  const [selectedYear, setSelectedYear] = useState(academicYears[0]);

  // Handle year selection change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 pt-4 items-center">
      <h1 className="font-bold text-[20px]">Report Card</h1>

      {/* Table displaying grades for selected academic year */}
      <div className="w-full sm:w-[800px] flex flex-col gap-4 p-4 mt-4 bg-[#fafafa] rounded-lg shadow-lg">
        {/* Dropdown for selecting academic year */}
        <FormControl className="w-[150px]">
          <InputLabel color={"secondary"}>Academic Year</InputLabel>
          <Select
            color={"secondary"}
            value={selectedYear}
            onChange={handleYearChange}
            label="Academic Year"
          >
            {academicYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="grades table">
            <TableHead>
              <TableRow>
                <TableCell>Class Name</TableCell>
                <TableCell align="center">Q1</TableCell>
                <TableCell align="center">Q2</TableCell>
                <TableCell align="center">Q3</TableCell>
                <TableCell align="center">Q4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gradesData[selectedYear].map((row) => (
                <TableRow key={row.className}>
                  <TableCell component="th" scope="row">
                    {row.className}
                  </TableCell>
                  <TableCell align="center">{row.Q1}</TableCell>
                  <TableCell align="center">{row.Q2}</TableCell>
                  <TableCell align="center">{row.Q3}</TableCell>
                  <TableCell align="center">{row.Q4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ReportCard;
