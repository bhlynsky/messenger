import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    message: {
        margin: '20px 25px 20px 25px',
    },
    messageContainer: {
        width: '100%',
        minHeight: '500px',
        minWidth: '400px',
        height: '860px',
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
    '@media (max-height: 840px)': {
        messageContainer: {
            height: '71vh',
        },
    },
    '@media (min-height: 840px)': {
        messageContainer: {
            height: '690px',
        },
    },
    '@media (min-height: 920px)': {
        messageContainer: {
            height: '750px',
        },
    },
    '@media (min-height: 1080px)': {
        messageContainer: {
            height: '860px',
        },
    },
    '@media (min-height: 1440px)': {
        messageContainer: {
            height: '1225px',
        },
    },
}));
