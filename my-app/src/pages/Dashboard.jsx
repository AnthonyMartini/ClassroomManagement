import React from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import AnnouncementBoard from "../components/Announcements";

// Import the images
import mathImage from "../img/mathsample.jpg";
import scienceImage from "../img/sciencesample.avif";
import artImage from "../img/artsample.jpg";
import historyImage from "../img/historysample.jpg";
import englishImage from "../img/englishsample.jpg";

const classes = [
  {
    id: "math",
    name: "Math",
    grade: 90.43,
    teacher: "Mrs. Kohr",
    imgSrc: mathImage,
  },
  {
    id: "science",
    name: "Science",
    grade: 88.57,
    teacher: "Mr. Smith",
    imgSrc: scienceImage,
  },
  {
    id: "history",
    name: "History",
    grade: 76.02,
    teacher: "Mr. Kahn",
    imgSrc: historyImage,
  },
  {
    id: "english",
    name: "English",
    grade: 85.3,
    teacher: "Mrs. Lee",
    imgSrc: englishImage,
  },
  {
    id: "art",
    name: "Art",
    grade: 95.4,
    teacher: "Mr. Doe",
    imgSrc: artImage,
  },
];

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
