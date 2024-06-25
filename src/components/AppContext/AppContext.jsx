import { createContext, useState } from "react";

export const AppContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AppProvider = ({children})=>{
    const [themeColor, setThemeColor] = useState(false);
    // Change Theme Color
    const onChangeThemeColor = () => {
        setThemeColor(!themeColor);
    };

    const [showToggle, setShowToggle] = useState(false);
    //Show Toggle
    const showToggleForheader = () => {
        if (showToggle) {
        setShowToggle(!showToggle);
        } else {
        setShowToggle(!showToggle);
        }
    };
    return <AppContext.Provider value={{
    onChangeThemeColor,
    themeColor,
    setThemeColor,
    showToggleForheader,
    showToggle,
    setShowToggle,
    }} >
        {children}
    </AppContext.Provider>
}
