import React, { useEffect, useState } from "react";
import "./OutleadHome.css"
import OutleadHeroSection from "../OutleadHerosection/OutleadHeroSection";
import OutleadClients from "../OutleadClients/OutleadClients";
const OutleadHome = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsHidden(true); // Hide the navbar when scrolling down
        } else {
            setIsHidden(false); // Show the navbar when scrolling up
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    return (
        <>
            <section id="AnimatedNavigationBar">
                <div className={`NavigationBar ${isHidden ? 'hidden' : ''}`}>

                </div>
            </section>

            <OutleadHeroSection />
            <OutleadClients/>
        </>
    )
}

export default OutleadHome