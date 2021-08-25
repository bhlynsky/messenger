import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    message: {
        margin: '20px 25px 20px 25px',
        color: theme.palette.text.primary,
    },
    messageContainer: {
        width: '100%',
        minHeight: '500px',
        minWidth: '400px',
        height: 'calc(100vh - 210px)',
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
