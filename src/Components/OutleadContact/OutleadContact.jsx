import React, { useContext, useState } from "react";
import ThemeContext from "../../../ThemeContext";
import "./OutleadContact.css"
const OutleadContact = () => {
    const founders = [
        {
            FounderName: "Shanay Shah",
            FounderDescription: "For B2B",
        },
        {
            FounderName: "Vivek Kankaria",
            FounderDescription: "For B2C",
        }
    ]
    const { currentTheme, changeTheme } = useContext(ThemeContext);
    return (
        <>
            <div onClick={changeTheme} className={`contact-container ${currentTheme.className}`}>
                {founders.map((founder,index) => (
                    <div className="contact-card" key={index}>
                        <h1>{founder.FounderName}</h1>
                        <h3>{founder.FounderDescription}</h3>
                        <div className={`AnimatedBtn`}>
                <button className={`${currentTheme.className}`}>Contact Now</button>
            </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default OutleadContact;