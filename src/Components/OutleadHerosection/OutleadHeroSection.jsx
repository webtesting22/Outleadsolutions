import React, { useState } from "react";
// import OutleadClients from "../OutleadClients/OutleadClients";
const OutleadHeroSection = () => {
  // const [colorIndex, setColorIndex] = useState(0);

  // const colors = ["green", "black", "white", "red", "blue", "purple"];

  // const handleClick = () => {
  //   setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  // };
  // const themes = [
  //   { name: "OrangeBlackTheme", className: "orangeBlack", },
  //   { name: "OrangeWhiteTheme", className: "orangeWhite", },
  //   { name: "LightTheme", className: "light", },
  //   // { name: "Green", className: "green", },
  // ]
  // const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  // function changeTheme() {
  //   setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);

  // }
  // const currentTheme = themes[currentThemeIndex];
  return (
    <div
      // onClick={changeTheme}
      // className={`container ${currentTheme.className}`}
      style={{
        height: "200vh",
        // backgroundColor: colors[colorIndex],
        transition: "0.5s",
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
