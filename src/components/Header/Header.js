import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Typography variant="subtitle1">
                <Link className={classes.link} to="/main">
                    Main Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link className={classes.link} to="/user">
                    User Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link className={classes.link} to="/admin">
                    Admin Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link className={classes.link} to="/stylesheet">
                    Styles examples
                </Link>
            </Typography>
        </AppBar>
    );
}
