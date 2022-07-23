import React, { createContext, useState } from "react";

export const AccentContextAPI = createContext();

export function AccentContextProvider(props) {
    const [accent, setAccent] = useState("teal");
    return (
        <AccentContextAPI.Provider value={{accent, setAccent}}>
            {props.children}
        </AccentContextAPI.Provider>
    )
}