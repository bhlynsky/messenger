import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    block: {
        border: '1px black solid',
        borderRadius: '10px',
        boxShadow: '6px 6px 13px -8px rgba(0,0,0,0.96)',
        padding: '0px 30px 30px',
        width: '80%',
        margin: 'auto',
        marginTop: '15px',
    },
    fileInputBase: {
        display: 'none',
    },
    /* here input is hidden because fab is actual look of input,but it dont have functionality of this element so I 
     hide input to place him behind fab consequently we have good loooking file input  */
    inputDecoration: {
        borderRadius: '5px',
        marginBottom: '-10px',
    },
    pageWrapper: {
        height: 'calc(100vh - 52px)',
        overflow: 'auto',
    },
});

export default useStyles;
