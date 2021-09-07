import React from 'react';
import { CircularProgress, Paper } from '@material-ui/core';
import { useStyles } from './styles.js';

const Loading = ({ isLoading, children }) => {
    const classes = useStyles();

    return (
        <Paper square className={classes.pageWrapper}>
            {isLoading ? <CircularProgress className={classes.spinner} /> : { ...children }}
        </Paper>
    );
};

export default Loading;
