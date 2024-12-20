import React from "react";

function Grades() {
  // Sample data for upcoming assignments
  const assignments = [
    { id: 1, name: "Math Homework #1", dueDate: "2024-12-20", subject: "Math" },
    {
      id: 2,
      name: "Science Project",
      dueDate: "2024-12-22",
      subject: "Science",
    },
    { id: 3, name: "History Essay", dueDate: "2024-12-25", subject: "History" },
    {
      id: 4,
      name: "English Reading Assignment",
      dueDate: "2024-12-27",
      subject: "English",
    },
    {
      id: 5,
      name: "PE Fitness Log",
      dueDate: "2024-12-30",
      subject: "Physical Education",
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-4 items-center">
      <h1 className="font-bold text-[20px]">Upcoming Assignments</h1>
      <div className="w-full sm:w-[800px] flex flex-col gap-4 p-4 text-left bg-[#fafafa] rounded-lg shadow-lg">
        {/* Table Headers */}
        <div className="flex justify-between font-bold border-b-2 pb-2 mx-2">
          <div className="w-1/3">Assignment Name</div>
          <div className="w-1/3">Class</div>
          <div className="w-[100px]">Due Date</div>
        </div>

        {/* Assignments List */}
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="flex justify-between items-center p-2 shadow-md hover:bg-gray-200 transition-all border-1 rounded-md"
          >
            <div className="w-1/3">{assignment.name}</div>
            <div className="w-1/3">{assignment.subject}</div>
            <div className="w-[100px] font-medium">{assignment.dueDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grades;
