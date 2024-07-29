import React, { useEffect, useState,useContext } from "react";
import "./OutleadHome.css"
import OutleadHeroSection from "../OutleadHerosection/OutleadHeroSection";
import OutleadClients from "../OutleadClients/OutleadClients";
import OutleadServices from "../OutleadServices/OutleadServices";
import OutleadAbout from "../OutleadAbout/OutleadAbout";
import { Link } from "react-router-dom";
import ThemeContext from "../../../ThemeContext";
import NavigationBar from "../NavigationBar/NavigationBar";
const OutleadHome = () => {
    
    const { currentTheme, changeTheme } = useContext(ThemeContext);

   
    return (
        <>
            <div style={{ border: "none" }}
                onClick={changeTheme}
                className={`container ${currentTheme.className}`} >
               
                <NavigationBar />
                <OutleadHeroSection />
                {/* <OutleadAbout /> */}
                <OutleadServices />
                <OutleadClients />

            </div>
        </>
    )
}

export default OutleadHome;