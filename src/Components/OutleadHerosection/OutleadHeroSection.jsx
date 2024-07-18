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
        height: "500vh", 
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
      <p style={{ color: "white", fontSize: "24px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      </p>
    </div>
  );
};

export default OutleadHeroSection;
