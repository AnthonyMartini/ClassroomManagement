import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "1rem",
        backgroundColor: "#f4f4f9",
      }}
    >
      <NavLink to="/grades" style={{ textDecoration: "none", color: "black" }}>
        Grades
      </NavLink>
      <NavLink
        to="/student-info"
        style={{ textDecoration: "none", color: "black" }}
      >
        Student Information
      </NavLink>
      <NavLink
        to="/progress-report"
        style={{ textDecoration: "none", color: "black" }}
      >
        Progress Report
      </NavLink>
    </nav>
  );
}

export default Navbar;
