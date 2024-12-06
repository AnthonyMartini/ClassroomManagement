import React from "react";
import { useParams } from "react-router-dom";

const gradesData = {
  math: [
    { assignment: "Homework 1", score: "95%" },
    { assignment: "Quiz 1", score: "90%" },
  ],
  science: [
    { assignment: "Lab 1", score: "85%" },
    { assignment: "Midterm", score: "88%" },
  ],
  history: [
    { assignment: "Essay", score: "92%" },
    { assignment: "Final Exam", score: "89%" },
  ],
};

function GradeDetails() {
  const { classId } = useParams();
  const details = gradesData[classId] || [];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Grade Breakdown</h2>
      <ul>
        {details.map((item, index) => (
          <li key={index}>
            {item.assignment}: {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GradeDetails;
