import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    containerHeader: {
        background: 'lightgray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        marginLeft: '10px',
        marginTop: '2px',
        minWidth: '400px',
        height: '100%',
        width: '60%',
        borderLeft: '1px #e3e3e3 solid',
        borderRight: '1px #e3e3e3 solid',
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
    message: {
        margin: '20px 25px 20px 25px',
    },

    searchBar: {
        width: '100%',
        background: 'lightgray',
        zIndex: '1',
        paddingBottom: '5px',
    },
    highlight: {
        background: 'pink',
    },
    newGroupButton: {
        width: '50%',
        marginTop: '5px',
    },
}));
