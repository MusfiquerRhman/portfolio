import React, { createContext, useState } from "react";

export const ThemeContextAPI = createContext();

export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContextAPI.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContextAPI.Provider>
    )
}