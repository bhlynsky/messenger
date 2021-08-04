import { makeStyles } from '@material-ui/core';

const drawerWidth = '25%';
export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        postition: 'relative',
        marginTop: '60px',
        marginLeft: '8px',
    },

    container: {
        marginLeft: '10px',
        marginTop: '2px',
        width: '60%',
        borderLeft: '1px #e3e3e3 solid',
        borderRight: '1px #e3e3e3 solid',
    },
    containerHeader: {
        background: 'lightgray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    messageContainer: {
        width: '100%',
        minHeight: '300px',
        height: '70vh',
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
    messagePreview: {
        margin: '0px 15px 0px 15px',
        cursor: 'pointer',
        textDecoration: 'none',
    },
    groupPreview: {
        marginTop: '10px',
        border: '1px black solid',
        borderRadius: '5px',
        '&:hover': {
            background: 'lightgray',
        },
    },
    groupPreviewActive: {
        marginTop: '10px',
        border: `2px ${theme.palette.primary.main} solid`,
        borderRadius: '5px',
        '&:hover': {
            background: 'lightgray',
        },
    },
    linkWithoutStyles: {
        textDecoration: 'none',

        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
            color: 'black',
        },
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
    modalForm: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        marginLeft: -250,
        width: 400,

        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
