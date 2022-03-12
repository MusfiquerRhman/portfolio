import React, { createContext, useState } from "react";

export const InteractionContext = createContext();

export function InteractionProvider(props) {
    const [inView, setInView] = useState("#header");
    return (
        <InteractionContext.Provider value={{inView, setInView}}>
            {props.children}
        </InteractionContext.Provider>
    )
}