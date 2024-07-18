import React, { useState } from "react";
// import OutleadClients from "../OutleadClients/OutleadClients";
const OutleadHeroSection = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["rgba(40, 43, 41, 1)", "rgba(255, 165, 0, 1)", "rgba(235, 237, 237, 1)"];

    const handleClick = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                height: "200vh",
                backgroundColor: colors[colorIndex],
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
            {/* <OutleadClients /> */}
        </div>
    );
};

export default OutleadHeroSection;
