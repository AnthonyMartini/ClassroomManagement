import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionCard({ title }) {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* Replace CardMedia with a div */}
        <div
          style={{
            height: "140px", // Same height as the original CardMedia
            backgroundColor: "lightblue", // Desired solid color
          }}
        ></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" style={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
