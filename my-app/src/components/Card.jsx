import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

export default function ActionCard({ title, teacher, imgSrc }) {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <Card
      style={{ width: 250, height: 250 }}
      onClick={() => {
        navigate("/grade-details"); // Navigate to the route
      }}
    >
      <CardActionArea>
        {imgSrc ? (
          <CardMedia sx={{ height: 140 }} image={imgSrc} title="class media" />
        ) : (
          <div
            style={{
              height: 140,
              backgroundColor: "#e0e0e0", // Default gray color
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="h-[400px]"
            style={{ color: "text.secondary" }}
          >
            {teacher}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
