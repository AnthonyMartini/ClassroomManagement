import React from "react";
import { useNavigate } from "react-router-dom";

function GradeDetails() {
  // Sample data for grades
  const grades = [
    {
      id: 1,
      name: "Math Homework #1",
      date: "2024-12-01",
      grade: "95%",
      type: "Homework",
    },
    {
      id: 2,
      name: "Science Project",
      date: "2024-12-03",
      grade: "89%",
      type: "Project",
    },
    {
      id: 3,
      name: "History Essay",
      date: "2024-12-05",
      grade: "92%",
      type: "Essay",
    },
    {
      id: 4,
      name: "English Reading Assignment",
      date: "2024-12-07",
      grade: "87%",
      type: "Homework",
    },
    {
      id: 5,
      name: "PE Fitness Log",
      date: "2024-12-10",
      grade: "100%",
      type: "Fitness Log",
    },
  ];

  // Grade weight data
  const gradeWeights = [
    { type: "Homework", weight: "40%" },
    { type: "Project", weight: "30%" },
    { type: "Essay", weight: "20%" },
    { type: "Fitness Log", weight: "10%" },
  ];
  const navigate = useNavigate();

  // Mock total grade
  const totalGrade = "93%";

  return (
    <div className="flex flex-col gap-6 pt-4 items-center">
      {/* Total Grade */}
      <h1 className="font-bold text-[24px] text-center">
        Total Grade: <span className="text-green-600">{totalGrade}</span>
      </h1>
      <div className="flex flex-row gap-2">
        <div className="w-[300px]">
          {/* Back Button */}
          <button
            onClick={() => navigate("/Dashboard")}
            className="self-start ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
          >
            Back to Dashboard
          </button>
        </div>
        {/* Assignments Section */}
        <div className="w-full sm:w-[800px] flex flex-col gap-4 p-4 text-left bg-[#fafafa] rounded-lg shadow-lg">
          {/* Table Headers */}
          <h2 className="font-bold text-[20px]">Assignments</h2>
          <div className="flex justify-between font-bold border-b-2 pb-2 mx-2">
            <div className="w-1/4">Assignment Name</div>
            <div className="w-1/4">Type</div>
            <div className="w-[100px]">Grade</div>
            <div className="w-[100px]">Date</div>
          </div>

          {/* Assignments List */}
          {grades.map((grade) => (
            <div
              key={grade.id}
              className="flex justify-between items-center p-2 shadow-md hover:bg-gray-200 transition-all border-1 rounded-md"
            >
              <div className="w-1/4">{grade.name}</div>
              <div className="w-1/4">{grade.type}</div>
              <div className="w-[100px] font-medium">{grade.grade}</div>
              <div className="w-[100px]">{grade.date}</div>
            </div>
          ))}
        </div>

        {/* Grade Weight Section */}
        <div className="w-full sm:w-[300px] flex flex-col gap-4 p-4 text-left bg-[#fafafa] rounded-lg shadow-lg">
          <h2 className="font-bold text-[20px]">Grade Weight Breakdown</h2>
          <div className="flex justify-between font-bold border-b-2 pb-2 mx-2">
            <div className="w-1/2">Type</div>
            <div className="w-1/2">Weight</div>
          </div>

          {gradeWeights.map((weight, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 shadow-md hover:bg-gray-200 transition-all border-1 rounded-md"
            >
              <div className="w-1/2">{weight.type}</div>
              <div className="w-1/2 font-medium">{weight.weight}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradeDetails;
