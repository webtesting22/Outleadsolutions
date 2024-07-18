import React, { useState } from "react";
import "./OutleadServices.css"
const OutleadServices = () => {
    const servicePics = [
        { 
            icons: <img src="/images/Figma-logo.png" /> 
        },
        { 
            icons: <img src="/images/Photoshop_logo_PNG3.png" /> 
        },
        { 
            icons: <img src="/images/Adobe_illustrator_logo_PNG3.png" /> 
        },
        { 
            icons: <img src="/images/after-effects-logo-PNG-10.png" /> 
        }
    ]
    // const themes= [
    //     { name: "OrangeBlackTheme", className: "orangeBlack", },
    //     { name: "OrangeWhiteTheme", className: "orangeWhite",},
    //     { name: "LightTheme", className: "light",  },
        
    // ]
    // const [currentThemeIndex,setCurrentThemeIndex]=useState(0);
    // function changeTheme(){
    //     setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);

    // }
    // const currentTheme = themes[currentThemeIndex];

    return (
        <>
            <div 
            // onClick={changeTheme}
            // className={`container ${currentTheme.className}`} 
             style={{ display: "flex", justifyContent: "center" ,flexDirection:"column" }}>
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
           
        </>

    )
}
export default OutleadServices;