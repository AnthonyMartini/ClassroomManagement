import React from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import AnnouncementBoard from "../components/Announcements";

function Dashboard({ classData }) {
  return (
    <div className="flex flex-col gap-4 pt-4 items-center">
      <h1 className="font-bold text-[20px]">Student Dashboard</h1>
      <div className="w-full flex flex-row">
        <AnnouncementBoard />
        <div className="flex flex-col gap-2  max-w-[800px] mx-auto">
          <div className="flex justify-center flex-wrap gap-2">
            {classData &&
              classData.map((cls) => (
                <Card
                  key={cls.id}
                  title={`${cls.name} - ${cls.grade}%`}
                  teacher={cls.teacher}
                  imgSrc={cls.imgSrc} // Passing imgSrc to Card component
                />
              ))}
          </div>
        </div>
        <div className="w-[300px]" />
      </div>
    </div>
  );
}

export default Dashboard;
