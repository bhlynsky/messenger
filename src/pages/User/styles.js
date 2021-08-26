import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    margin: {
        margin: '20px',
    },
    paper: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        marginLeft: -250,
        width: 400,
        display: 'grid',
        gridTemplateRows: '40px,40px,40px,25px,25px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        maxWidth: 345,
    },
    media: {
        maxHeight: 140,
        paddingTop: '56.25%', // 16:9,
    },
    button: {
        width: '47.5%',
    },
    buttonClose: {
        width: '47.5%',
        marginLeft: '5%',
    },
    input: {
        display: 'none',
    },
}));

export default useStyles;
