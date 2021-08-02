import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const classes = useStyles();
    const location = useLocation().pathname;

    return (
        <AppBar className={classes.header}>
            <Typography variant="subtitle1">
                <Link className={'/main/' === location ? classes.activeLink : classes.link} to="/">
                    Main Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link
                    className={'/user' === location ? classes.activeLink : classes.link}
                    to="/user"
                >
                    User Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link
                    className={'/admin' === location ? classes.activeLink : classes.link}
                    to="/admin"
                >
                    Admin Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link
                    className={'/nasa' === location ? classes.activeLink : classes.link}
                    to="/nasa"
                >
                    Nasa
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link
                    className={'/stylesheet' === location ? classes.activeLink : classes.link}
                    to="/stylesheet"
                >
                    Styles examples
                </Link>
            </Typography>
        </AppBar>
    );
}
