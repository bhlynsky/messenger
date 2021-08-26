import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
    paper: {
        height: 'calc(100vh - 16px)',
        //16px - margin from user agent stylesheet applied to body
        //used here to remove excessive scroll
        overflow: 'auto',
    },
}));
