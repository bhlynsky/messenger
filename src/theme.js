import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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
    },
});
export default theme;
