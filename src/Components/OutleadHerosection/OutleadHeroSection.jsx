import React, { useState } from "react";

const OutleadHeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["green", "black", "white", "red", "blue", "purple"];
  
  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      onClick={handleClick}
      style={{ 
        height: "200vh", 
        backgroundColor: colors[colorIndex], 
        transition:"0.5s",
        width: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      
    </div>
  );
};

export default OutleadHeroSection;
