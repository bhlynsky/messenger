import React from 'react';
import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme, darkTheme } from './theme';
import { createTheme } from '@material-ui/core';

const ThemeContext = createContext({});

function useThemeContext() {
    return useContext(ThemeContext);
}

function CustomThemeProvider(props) {
    const [isDarkMode, setDarkMode] = useState(false);

    const theme = createTheme(isDarkMode ? darkTheme : lightTheme);

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
                {props.children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export { useThemeContext, CustomThemeProvider };
