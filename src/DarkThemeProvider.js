import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { connect } from 'react-redux';
import { lightTheme, darkTheme } from './theme';

function DarkThemeProvider({ isDarkTheme, children }) {
    const theme = createTheme(isDarkTheme ? darkTheme : lightTheme);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const mapStateToProps = (state) => ({
    isDarkTheme: state.rootReducer.isDarkTheme,
});

export default connect(mapStateToProps)(DarkThemeProvider);
