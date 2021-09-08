import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    header: {
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'row',
        height: '50px',
        position: 'relative',
    },
    link: {
        padding: '5px',
        marginLeft: '50px',
        marginTop: '20px',
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'lighter',
        lineHeight: '45px',
    },
    activeLink: {
        padding: '5px',
        marginLeft: '50px',
        marginTop: '20px',
        textDecoration: 'underline',
        color: 'white',
        fontWeight: 'bold',
        lineHeight: '45px',
    },
    darkModeToggle: {
        margin: '5px 40px auto auto',
        display: 'flex',
        justifyItems: 'center',
    },
    darkModeIcon: {
        width: '36px',
        height: '36px',
    },
    logoutButton: {
        marginTop: '5px',
        marginRight: '10px',
        color: 'red',
        border: '1px solid red',
    },
    loginButton: {
        margin: '5px 10px',
        border: '1px solid white',
    },
    loginLink: {
        color: 'white',
        textDecoration: 'none',
    },
});
