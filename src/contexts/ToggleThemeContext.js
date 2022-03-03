import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import themes from '../styles/themes';

export const ToggleThemeContext = createContext();

export default function ToggleThemeProvider({ children }) {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark');

    function handleToggleTheme() {
        setTheme((prevState) => (
            prevState === 'dark' ? 'light' : 'dark'
        ))
    }

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <ToggleThemeContext.Provider
            value={{
                theme,
                handleToggleTheme,
            }}
        >
            <ThemeProvider
                theme={themes[theme] || themes.dark}
            >
                {children}
            </ThemeProvider>
        </ToggleThemeContext.Provider>
    );
}