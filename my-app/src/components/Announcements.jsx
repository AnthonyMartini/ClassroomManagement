import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const AnnouncementBoard = () => {
  // Mock data for announcements
  const announcements = [
    {
      id: 1,
      title: "School Closed for Holiday",
      date: "December 18, 2024",
      details:
        "The school will remain closed for the winter holidays from December 18, 2024, to January 2, 2025. Classes will resume on January 3, 2025.",
    },
    {
      id: 2,
      title: "Parent-Teacher Conferences",
      date: "January 15, 2025",
      details:
        "Parent-teacher conferences will be held on January 15, 2025. Please contact the school office to schedule a time slot.",
    },
    {
      id: 3,
      title: "New Sports Equipment",
      date: "December 10, 2024",
      details:
        "We are excited to announce that the school has received new sports equipment for the basketball and soccer teams.",
    },
  ];

  return (
    <div className="w-[300px] p-2">
      {/* Header Section */}
      <h2 className="text-[20px] font-bold pb-2">Announcements</h2>

      {/* Announcements List */}
      <div className="h-full overflow-y-auto  rounded-lg flex flex-col gap-2 p-2">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="rounded-lg bg-white p-1 shadow-md"
          >
            <h2 className="font-semibold">{announcement.title}</h2>
            <h3 className="text-[14px]">{announcement.date}</h3>
            <h3 className="text-[12px] text-left">{announcement.details}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBoard;
