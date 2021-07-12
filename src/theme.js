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
        subtitle2: {
            fontSize: '10px',
        },
    },
    overrides: {
        MuiFab: {
            sizeSmall: {
                marginBottom: '-10px',
            },
        },
        MuiFormHelperText: {
            root: { marginBottom: '-20px' },
        },
    },
});
export default theme;
