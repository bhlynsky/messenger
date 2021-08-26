import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        height: 'calc(100vh - 10px)',
        background: theme.palette.background.paper,
    },
}));
