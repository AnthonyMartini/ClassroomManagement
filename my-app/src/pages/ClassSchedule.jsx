import React from "react";

const HighSchoolClassSchedulePage = ({ classData }) => {
  // Mock data for the high school class schedule

  return (
    <div className="flex flex-col gap-4 pt-4 items-center">
      <h1 className="font-bold text-[20px]">Student Schedule</h1>
      {/* Schedule List */}
      <div className="w-full sm:w-[800px] flex flex-col  p-4 bg-[#fafafa] rounded-lg shadow-lg text-left">
        {classData.map((classItem) => (
          <div key={classItem.id} className="mb-4">
            <div className="font-bold text-lg">{classItem.name}</div>
            <div className="text-sm text-gray-700">
              <p>Instructor: {classItem.teacher}</p>
              <p>Time: {classItem.time}</p>
              <p>Room: {classItem.room}</p>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighSchoolClassSchedulePage;
