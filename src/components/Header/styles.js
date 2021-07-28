import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    header: {
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'row',
        height: '40px',
        position: 'relative',
    },
    link: {
        padding: '5px',
        marginLeft: '50px',
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'lighter',
        verticalAlign: 'text-top',
    },
    activeLink: {
        padding: '5px',
        marginLeft: '50px',
        textDecoration: 'underline',
        verticalAlign: 'text-top',
        fontWeight: 'bold',
        color: 'white',
    },
});
