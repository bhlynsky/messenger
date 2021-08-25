import { createTheme } from '@material-ui/core';

const baseTheme = createTheme({
    typography: {
        h1: {
            fontSize: '40px',
        },
        h2: {
            fontSize: '25px',
        },
        subtitle1: {
            fontWeight: 'bold',
        },
    },
    overrides: {
        MuiFormHelperText: {
            root: { marginBottom: '-20px' },
        },
    },
});

const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        type: 'light',
        primary: {
            main: '#374785',
        },
        secondary: {
            main: '#A8D0E6',
        },
        error: {
            main: '#B00020',
        },
    },
});

const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        type: 'dark',
        primary: {
            main: '#374785',
        },
        secondary: {
            main: '#A8D0E6',
        },
        error: {
            main: '#B00020',
        },
    },
});
export { lightTheme, darkTheme };
