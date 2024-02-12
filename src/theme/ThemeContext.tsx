import React, {createContext, useState} from "react";

interface ThemeContextInterface{
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

export function ThemeContextProvider({children}:{children: React.ReactNode}){
    const [mode, setMode] = useState<"light" | "dark">("light");

    function toggleTheme(){
        mode === "light"? setMode("dark") : setMode("light");
    }

    return(
        <ThemeContext.Provider value={{theme: mode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}