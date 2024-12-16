import React from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

// Import the images
import mathImage from "../img/mathsample.jpg";
import scienceImage from "../img/sciencesample.avif";

const classes = [
  {
    id: "math",
    name: "Math",
    grade: 90.43,
    teacher: "David Kohr",
    imgSrc: mathImage,
  },
  {
    id: "science",
    name: "Science",
    grade: 88.57,
    teacher: "Mathew Smith",
    imgSrc: scienceImage,
  },
  {
    id: "history",
    name: "History",
    grade: 76.02,
    teacher: "Fred Kahn",
    imgSrc: "",
  },
  {
    id: "english",
    name: "English",
    grade: 85.3,
    teacher: "Sarah Lee",
    imgSrc: "",
  },
  {
    id: "pe",
    name: "Physical Education",
    grade: 95.4,
    teacher: "John Doe",
    imgSrc: "",
  },
];

function Dashboard() {
  return (
    <div className="flex flex-col gap-2 pt-4 max-w-[800px] mx-auto">
      <h1 className="font-bold text-[20px]">Student Dashboard</h1>
      <div className="flex justify-center flex-wrap gap-2">
        {classes.map((cls) => (
          <Card
            key={cls.id}
            title={`${cls.name} - ${cls.grade}%`}
            teacher={cls.teacher}
            imgSrc={cls.imgSrc} // Passing imgSrc to Card component
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
