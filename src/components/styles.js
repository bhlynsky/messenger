import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    spinner: {
        height: '100px',
        width: '100px',
        position: 'absolute',
        left: '50%',
        top: '50%',
    },
    pageWrapper: {
        height: 'calc(100vh - 52px)',
        overflow: 'auto',
    },
});
