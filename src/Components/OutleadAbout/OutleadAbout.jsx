import React, { useState, useEffect, useContext } from "react";
import "./OutleadAbout.css";
import ThemeContext from "../../../ThemeContext";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Col, Row } from "antd";

const OutleadAbout = () => {
    const { currentTheme, changeTheme } = useContext(ThemeContext);

    return (
        <>

            <div className={`about-section ${currentTheme.className}`} onClick={changeTheme} >
                <Row>
                    <Col lg={12}></Col>
                    <Col lg={12}>
                        <h1 style={{ textAlign: "center" }}>What is Outlead Solution?</h1>
                        <p className="aboutParagraph">The onset of the global pandemic has drastically changed the way businesses survive and thrive. The founders of OutLead took this challenge as an opportunity with one simple goal - to reconstruct the pillars of sales and marketing in the digital world.</p>
                        <p className="aboutParagraph">
                            OutLead is a proud composer of a unique 5-stage process for lead generation, where special emphasis is laid on establishing trust and authenticity with clients over the internet. This process further includes researching and identifying key potential customer bases over LinkedIn, by engaging with them in a dialogue and thereby selling the idea of your product/service.</p>
                        <p className="aboutParagraph">
                            This process of lead generation is further accompanied with carefully designed digital marketing tools, which involve - establishing digital presence of your business on key social media platforms, targeted strategies to identify and grow followers on such platforms, designing and posting of informative content pertaining to the business on a regular basis and so on.</p>
                        <p className="aboutParagraph">
                            It's time to join hands; and lead together with OutLead!</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default OutleadAbout;