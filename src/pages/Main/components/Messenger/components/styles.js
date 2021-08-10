import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    message: {
        margin: '20px 25px 20px 25px',
    },
    messageContainer: {
        width: '100%',
        minHeight: '300px',
        height: '71vh',
        maxHeight: '1440px',
        overflow: 'auto',
    },
    messageInput: {
        width: '100%',
        paddingTop: '5px',
    },
    input: {
        height: '30px',
    },
    textHighlight: {
        fontWeight: 'bold',
        background: 'pink',
    },
    avatar: {
        margin: '-5px 10px 10px',
    },
}));
