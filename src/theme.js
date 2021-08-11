import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
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
export default theme;
