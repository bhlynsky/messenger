import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    divider: {
        margin: '5px 60px 20px 60px',
        background: 'black',
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
}));
