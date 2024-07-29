import React,{useState,useContext} from "react";
import ThemeContext from "../../../ThemeContext";
import "./Footer.css";
const Footer = () => {
    const { currentTheme, changeTheme } = useContext(ThemeContext);
    return(
        <>
            <div className={`footer-section ${currentTheme.className}`} onClick={changeTheme}>
            <div>
                <img src="/images/Outlead-Logo.png"  style={{width:"100px",height:"100px",margin:"10px"}}/>
                </div>
                <h1>Outlead Solutions</h1>
            </div>
        </>
    )
}
export default Footer;