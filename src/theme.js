import createTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ad1457',
        },
        secondary: {
            main: '#009688',
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
