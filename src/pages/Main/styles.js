import { makeStyles } from '@material-ui/core';
import theme from '../../theme';

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
        marginTop: '50px',
        marginLeft: '8px',
    },

    container: {
        marginLeft: '25.5%',
        marginTop: '2px',
        width: '60%',
        borderLeft: '1px #e3e3e3 solid',
        borderRight: '1px #e3e3e3 solid',
    },
    containerHeader: {
        background: 'lightgray',
    },
    messageContainer: {
        width: '100%',
        height: '75vh',
        maxHeight: '100%',
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

    lastMessages: {
        marginTop: '10px',
        border: '1px black solid',
        borderRadius: '5px',
    },

    messageUserName: {},
    messageContent: {},
}));
