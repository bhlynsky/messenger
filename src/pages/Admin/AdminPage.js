import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from './styles';

export default function AdminPage() {
    //admin page
    const classes = useStyles();
    return (
        <Paper square className={classes.pageWrapper}>
            <h2>This is admin page. Should be protected. ....</h2>
        </Paper>
    );
}
