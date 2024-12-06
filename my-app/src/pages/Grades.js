import React from "react";
import { useNavigate } from "react-router-dom";

const classes = [
  { id: "math", name: "Math", grade: "A" },
  { id: "science", name: "Science", grade: "B+" },
  { id: "history", name: "History", grade: "A-" },
];

function Grades() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Grades</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {classes.map((cls) => (
          <div
            key={cls.id}
            onClick={() => navigate(`/grades/${cls.id}`)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              cursor: "pointer",
              textAlign: "center",
              width: "150px",
            }}
          >
            <h3>{cls.name}</h3>
            <p>Overall Grade: {cls.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grades;
