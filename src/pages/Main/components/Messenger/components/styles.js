import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    message: {
        margin: '20px 25px 20px 25px',
    },
    messageContainer: {
        width: '100%',
        minHeight: '500px',
        minWidth: '400px',
        height: 'calc(100vh - 195px)',
        overflow: 'auto',
    },
    messageInput: {
        width: '100%',
        paddingTop: '5px',
    },
    input: {
        height: '50px',
    },

    textHighlight: {
        fontWeight: 'bold',
        background: 'pink',
    },
    avatar: {
        margin: '-5px 10px 10px',
    },
    spinner: {
        height: '100px',
        width: '100px',
        position: 'absolute',
        left: '50%',
        top: '50%',
    },
}));
