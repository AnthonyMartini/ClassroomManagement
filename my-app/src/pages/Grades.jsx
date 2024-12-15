import React from "react";
//import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const classes = [
  { id: "math", name: "Math", grade: "A" },
  { id: "science", name: "Science", grade: "B+" },
  { id: "history", name: "History", grade: "A-" },
];

function Grades() {
  //const navigate = useNavigate();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Grades</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {classes.map((cls) => (
          <Card title={cls.name} />
        ))}
      </div>
    </div>
  );
}

export default Grades;
