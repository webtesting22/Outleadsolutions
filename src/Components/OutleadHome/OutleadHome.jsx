import React, { useEffect, useState } from "react";
import "./OutleadHome.css"
import OutleadHeroSection from "../OutleadHerosection/OutleadHeroSection";
import OutleadClients from "../OutleadClients/OutleadClients";
import OutleadServices from "../OutleadServices/OutleadServices"
const OutleadHome = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsHidden(true); // Hide the navbar when scrolling down

        } else if (currentScrollY < lastScrollY) {
            setIsHidden(false); // Show the navbar when scrolling up

        }

        setLastScrollY(currentScrollY);
    };
    const themes = [
        { name: "OrangeBlackTheme", className: "orangeBlack", },
        { name: "OrangeWhiteTheme", className: "orangeWhite", },
        { name: "LightTheme", className: "lightTheme", },

    ]
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
    function changeTheme() {
        setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);

    }
    const currentTheme = themes[currentThemeIndex];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    return (
        <>
            <div style={{border:"none"}}
                onClick={changeTheme}
                className={`container ${currentTheme.className}`} >
                <section id="AnimatedNavigationBar">
                    <div className={`NavigationBar ${isHidden ? 'hidden' : ''}  ${currentTheme.className}`}>
                        
                    </div>
                </section>

                <OutleadHeroSection />
                <OutleadServices />
                <OutleadClients />
            </div>
        </>
    )
}

export default OutleadHome