import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '17.5%',
        marginLeft: '10px',
    },
    avatar: {
        marginRight: '10px',
        marginBottom: '5px',
    },
    modalForm: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        marginLeft: '-150px',
        width: 400,
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modalLabels: {
        color: theme.palette.text.primary,
    },
    input: {
        width: '100%',
    },
    participants: {
        marginTop: '15px',
    },
    userSelect: {
        marginTop: '20px',
    },
    buttonsContainer: {
        marginTop: '20px',
    },
    labelUsername: {
        marginRight: '5px',
        marginBottom: '5px',
    },
    menuPaper: {
        maxHeight: '200px',
    },
    chip: {
        margin: '2px',
    },
    closeButton: {
        marginLeft: '20px',
    },
    closeModalIcon: {
        position: 'absolute',
        top: '-5px',
        right: '-5px ',
    },
}));
