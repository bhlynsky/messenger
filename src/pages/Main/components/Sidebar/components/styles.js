import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    divider: {
        margin: '5px 60px 20px 60px',
        background: 'black',
    },
    containerHeader: {
        background: 'lightgray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    groupList: {
        maxHeight: '500px',
        overflow: 'auto',
    },
    buttonClose: {
        width: '47.5%',
        marginLeft: '5%',
    },
    buttonSave: {
        width: '47.5%',
    },
    chip: {
        margin: '3px',
    },
    closeModalIcon: {
        position: 'absolute',
        top: '-10px',
        right: '-10px ',
    },
    input: {
        width: '100%',
    },
    participants: {
        marginTop: '15px',
    },
    userSelect: {
        marginTop: '40px',
    },
    buttonsContainer: {
        marginTop: '20px',
    },
    labelUsername: {
        marginRight: '5px',
        marginBottom: '5px',
    },
    verticalDivider: {
        margin: '5px',
    },
    messagePreview: {
        margin: '0px 15px 0px 15px',
        cursor: 'pointer',
        textDecoration: 'none',
    },
    linkWithoutStyles: {
        textDecoration: 'none',

        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
            color: 'black',
        },
    },
    openModalIcon: {
        width: '16px',
        height: '16px',
        margin: 'auto 5px auto auto',
    },
    menuIcon: {
        width: '16px',
        height: '16px',
        margin: 'auto 0px auto 5px',
    },
    menuIconMinimized: {
        width: '16px',
        height: '16px',
        marginRight: '0px',
        marginLeft: 'auto',
    },
    sidebar: {
        width: '25%',
        flexShrink: 0,
    },
    sidebarMinimized: {
        background: 'lightgray',
        height: 'calc(100vh - 65px)',
        width: '10vw',
    },

    groupPreview: {
        marginTop: '10px',
        border: '1px black solid',
        borderRadius: '5px',
        padding: '5px 2px 5px 2px',
        '&:hover': {
            background: 'lightgray',
        },
    },
    groupPreviewActive: {
        marginTop: '10px',
        border: `2px ${theme.palette.primary.main} solid`,
        borderRadius: '5px',
        padding: '5px 2px 5px 2px',
        '&:hover': {
            background: 'lightgray',
        },
    },
    groupPreviewMinimized: {
        border: '1px solid black',
        borderRadius: '10px',
        marginTop: '5px',
    },
    groupPreviewMinimizedActive: {
        border: `1px ${theme.palette.primary.main} solid`,
        borderRadius: '10px',
        marginTop: '5px',
        background: theme.palette.secondary.main,
    },
    groupSearchBar: {
        margin: '20px 0px 0px 20px',
        width: '90%',
    },
}));
