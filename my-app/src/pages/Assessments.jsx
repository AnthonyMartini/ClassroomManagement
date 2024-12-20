import React from "react";

function Assessments() {
  // Sample data for assessments (MAP and AIR scores)
  const assessments = [
    { id: 1, name: "MAP Math Test", dateTaken: "2024-10-15", score: 92 },
    { id: 2, name: "MAP Reading Test", dateTaken: "2024-10-18", score: 85 },
    { id: 3, name: "AIR Science Exam", dateTaken: "2024-11-05", score: 78 },
    { id: 4, name: "AIR English Exam", dateTaken: "2024-11-10", score: 88 },
    {
      id: 5,
      name: "MAP Social Studies Test",
      dateTaken: "2024-11-12",
      score: 72,
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-4 items-center text-left">
      <h1 className="font-bold text-[20px]">Assessment Results</h1>
      <div className="w-full sm:w-[800px] flex flex-col gap-4 p-4 text-left bg-[#fafafa] rounded-lg shadow-lg">
        {/* Table Headers */}
        <div className="flex justify-between font-bold border-b-2 pb-2 px-2">
          <div className="w-1/3">Assessment Name</div>
          <div className="w-1/3">Score</div>
          <div className="w-[100px]">Date Taken</div>
        </div>

        {/* Assessments List */}
        {assessments.map((assessment) => (
          <div
            key={assessment.id}
            className="flex justify-between items-center p-2 shadow-md hover:bg-gray-200 transition-all border-1 rounded-md"
          >
            <div className="w-1/3">{assessment.name}</div>
            <div className="w-1/3">{assessment.score}</div>
            <div className="w-[100px]">{assessment.dateTaken}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assessments;
