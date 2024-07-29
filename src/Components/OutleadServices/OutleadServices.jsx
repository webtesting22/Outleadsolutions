import React, { useState, useContext } from "react";
import "./OutleadServices.css"
import ThemeContext from "../../../ThemeContext";
const OutleadServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { currentTheme, changeTheme } = useContext(ThemeContext);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const servicePics = [
        {
            icons: <img src="/images/Logos/Figma-logo.png" />
        },
        {
            icons: <img src="/images/Logos/Photoshop_logo_PNG3.png" />
        },
        {
            icons: <img src="/images/Logos/Adobe_illustrator_logo_PNG3.png" />
        },
        {
            icons: <img src="/images/Logos/after-effects-logo-PNG-10.png" />
        }
    ]
    const services = [
        {
            ServiceIcon: "",
            ServiceName: "LinkedIn Outbound",
            ServiceDescription: <ul>
                <li>Web & Mobile Sites</li>
                <li>User Interface</li>
                <li>Design</li>
                <li>Responsive Techs</li>
            </ul>
        },
        {
            ServiceIcon: "",
            ServiceName: "B2B LEAD GENERATION",
            ServiceDescription: "OutLead Solutions provides Lead Generation service which has unique process itself and can be useful to fulfil your need for business goal.",
        },
        {
            ServiceIcon: "",
            ServiceName: "UI-UX DESIGN",
            ServiceDescription: <ul>
                <li>Digital Strategy </li>
                <li>User Experience Design </li>
                <li>User Interface Design </li>
                <li>Mobile Sites</li>
            </ul>
        },
        {
            ServiceIcon: "",
            ServiceName: "WEB DEVELOPMENT",
            ServiceDescription: "Outlead Solutions also improvises your online visibility by using website development which can be further used to explore your work by your customers.",
        },
        {
            ServiceIcon: "",
            ServiceName: "COLD EMAILING",
            ServiceDescription: <ul>
                <li>Custom Platform</li>
                <li>Back-End Executions </li>
                <li>Interface Apps </li>
                <li>Mobile Systems</li>
            </ul>
        },
        {
            ServiceIcon: "",
            ServiceName: "SOCIAL MEDIA MARKETING",
            ServiceDescription: "OutLead Solutions further harmonizes the unique tool for Lead Generation with careful and meticulously planned social media marketing techniques",
        },
        {
            ServiceIcon: "",
            ServiceName: "CONTENT WRITING",
            ServiceDescription: "OutLead Solutions offers the option of Content Writing and Posting for instances where sharing of detailed information is vital and pictures/graphics cannot do enough justice to the data in hand.",
        }
    ]
    return (
        <div onClick={changeTheme} className={`${currentTheme.className}`} style={{ height: "450vh", paddingTop: "200px" }}>
            <div
                style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {servicePics.map((item, index) => (
                            <div key={index} className="servicesLogo">
                                {item.icons}
                            </div>
                        ))}

                    </div>
                </div>
                <h1 className="company-header">"Success is not just about what you accomplish in your life, it's about what you inspire others to do. At Outlead Solutions, we strive to ignite the spark of innovation and drive progress for a better future."</h1>
                <p >Be part of a passionate community of professionals  who relentlessly pursue excellence.</p>
            </div>
            <div className="Sectionheading" style={{position:"sticky",top:"130px",zIndex:"10"}}>
            <h1>OUR SERVICES</h1>
            </div>
            <div className="servicesContainer">
                <div className="serviceCard">
                
                    <h1>LinkedIn Outbound</h1>
                    <ul>
                        <li>Web & Mobile Sites</li>
                        <li>User Interface</li>
                        <li>Design</li>
                        <li>Responsive Techs</li>
                    </ul>
                    {/* <marquee className="marqueeTag">LinkedIn LinkedIn LinkedIn LinkedIn LinkedIn LinkedIn LinkedIn LinkedIn</marquee> */}
                </div>
                
                <div className="serviceCard">
                    <h1>B2B Lead Generation</h1>
                    <p>OutLead Solutions provides Lead Generation service which has unique process itself and can be useful to fulfil your need for business goal.</p>
                </div>
                <div className="serviceCard">
                    <h1>UI-UX DESIGN</h1>
                    <ul>
                        <li>Digital Strategy </li>
                        <li>User Experience Design </li>
                        <li>User Interface Design </li>
                        <li>Mobile Sites</li>
                    </ul>
                </div>
            </div>
            <div className="servicesContainer">
                <div className="serviceCard">
                    <h1>WEB DEVELOPMENT</h1>
                    <p>Outlead Solutions also improvises your online visibility by using website development which can be further used to explore your work by your customers.</p>
                </div>
                <div className="serviceCard">
                    <h1>COLD EMAILING</h1>
                    <ul>
                        <li>Custom Platform</li>
                        <li>Back-End Executions </li>
                        <li>Interface Apps </li>
                        <li>Mobile Systems</li>
                    </ul>
                </div>
                <div className="serviceCard">
                    <h1>SOCIAL MEDIA MARKETING</h1>
                    <p>OutLead Solutions further harmonizes the unique tool for Lead Generation with careful and meticulously planned social media marketing techniques</p>
                </div>
                
            </div>
            <div className="servicesContainer">
                    <div className="serviceCard">
                        <h1>CONTENT WRITING</h1>
                        <p>OutLead Solutions offers the option of Content Writing and Posting for instances where sharing of detailed information is vital and pictures/graphics cannot do enough justice to the data in hand.</p>
                    </div>
                </div>
            {/* <div className="servicesContainer">
                {services.map((item, index) => (
                    <div className={`serviceCard ${hoveredIndex !== null && hoveredIndex !== index ? "hidden" : ""}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        key={index}>
                        <h1 className="title"> {item.ServiceName}</h1>
                        <p className="description">{item.ServiceDescription}</p>
                    </div>
                )
                )
                }
            </div> */}
        </div>

    )
}
export default OutleadServices;