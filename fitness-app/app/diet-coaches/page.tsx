// pages/diet-coaches.tsx or equivalent file
import React from "react";
import ContentCard from "../components/ContentCard";
import Fade from "@mui/material/Fade";

export default function DietCoaches() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-center p-4">
        <h1>Diet Coaches</h1>
      </div>
      <Fade in={true} timeout={1000}>
        <div className="p-4">
          <ContentCard />
        </div>
      </Fade>
    </div>
  );
}
