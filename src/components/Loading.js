import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from '../pages/NasaPics/styles.js';

const Loading = ({ isLoading, children }) => {
    const classes = useStyles();

    return (
        <div>{isLoading ? <CircularProgress className={classes.spinner} /> : { ...children }}</div>
    );
};

export default Loading;
