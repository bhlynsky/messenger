import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    containerHeader: {
        background: theme.palette.type === 'dark' ? '#121212' : 'lightgray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        marginLeft: '10px',
        marginTop: '2px',
        minWidth: '400px',
        height: '100%',
        width: '100%',
        borderLeft: '1px #e3e3e3 solid',
        borderRight: '1px #e3e3e3 solid',
    },

    searchBar: {
        width: '100%',
        background: theme.palette.type === 'dark' ? '#121212' : 'lightgray',
        zIndex: '1',
        paddingBottom: '5px',
    },

    searchBarInput: { marginLeft: '20%', width: '60%', color: 'gray' },
    highlight: {
        background: 'pink',
    },
    newGroupButton: {
        width: '50%',
        marginTop: '5px',
    },
    pageWrapper: {
        display: 'flex',
        height: 'calc(100vh - 52px)', // doing this to remove scroll. 50px height of header, 2px to remove scroll
    },

    groupHeaderText: {
        margin: 'auto',
    },
    clearIcon: {
        color: 'gray',
    },
}));
