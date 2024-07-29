import React, {  createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const themes = [
        { name: "OrangeBlackTheme", className: "orangeBlack" },
        { name: "OrangeWhiteTheme", className: "orangeWhite" },
        { name: "LightTheme", className: "lightTheme" },
    ];
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

    const changeTheme = () => {
        setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    };

    const currentTheme = themes[currentThemeIndex];

    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;

