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
    searchBar: {
        width: '100%',
        background: 'lightgray',
        zIndex: '1',
        paddingBottom: '5px',
    },
    searchBarInput: { marginLeft: '20%', width: '60%' },
    highlight: {
        background: 'pink',
    },
    newGroupButton: {
        width: '50%',
        marginTop: '5px',
    },
    displayFlex: {
        display: 'flex',
    },
    marginAuto: {
        margin: 'auto',
    },
}));
