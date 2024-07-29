import React,{useState,useEffect,useContext} from "react";
import ThemeContext from "../../../ThemeContext";
import { Link } from "react-router-dom";
import "./NavigationBar.css"
const NavigationBar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsHidden(true); // Hide the navbar when scrolling down

        }

        else if (currentScrollY < lastScrollY) {
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
    const { currentTheme, changeTheme } = useContext(ThemeContext);
    return(
    <section id="AnimatedNavigationBar">
        <div className={`NavigationBar ${isHidden ? 'hidden' : ''}  ${currentTheme.className}`}>
            <Link to="/" path="/"><img src="/images/Outlead-Logo.png" style={{ width: "70px" }} /></Link>
            <ul className="navbar-list">
                <Link to="OutleadAbout" path="/OutleadAbout" state={currentTheme.className}> <li>About</li></Link>
                <Link to="OutleadClients" path="/OutleadClients"><li>Clients</li></Link>
                <Link to="OutleadServices" path="/OutleadServices"><li>Services</li></Link>
                <Link to="OutleadContact" path="/OutleadContact"><li>Contact</li></Link>
            </ul>
            <div className={`AnimatedBtn`}>
                <button className={`${currentTheme.className}`}>Read More</button>
            </div>
        </div>
    </section>)
}
export default NavigationBar;