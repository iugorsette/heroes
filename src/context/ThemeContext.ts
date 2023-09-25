import { createContext } from "react";


let isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme") || "true");

export const themeContext = createContext({
    isDarkTheme,
    setIsDarkTheme: () => { 
        console.log("setIsDarkTheme");
        isDarkTheme = !isDarkTheme;
        localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
        console.log(isDarkTheme);
    }
});