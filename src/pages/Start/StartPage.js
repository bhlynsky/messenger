import { Typography, Paper, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default function StartPage() {
    const classes = useStyles();
    return (
        <Paper square className={classes.pageWrapper}>
            <div className={classes.container}>
                <Typography variant="h1" align="center">
                    Welcome! This is messenger app
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    className={classes.linkContainer}
                >
                    <Typography variant="h2">
                        To use it you must <Link to="/login">Login</Link>
                    </Typography>
                    <Typography variant="h2">
                        Dont have account? <Link to="/register">Register</Link>
                    </Typography>
                </Grid>
            </div>
        </Paper>
    );
}
