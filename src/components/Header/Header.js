import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';
import { headerRoutes } from '../../services/headerRoutes';

export default function Header() {
    const classes = useStyles();
    const location = useLocation().pathname;

    const checkIsLinkActive = (target) => {
        if (target === location) {
            return classes.activeLink;
        } else {
            return classes.link;
        }
    };

    return (
        <AppBar className={classes.header}>
            <Typography variant="subtitle1">
                <Link
                    className={location.includes('/main') ? classes.activeLink : classes.link}
                    to="/"
                >
                    Main Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link className={checkIsLinkActive(headerRoutes.USER)} to={headerRoutes.USER}>
                    User Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link className={checkIsLinkActive(headerRoutes.ADMIN)} to={headerRoutes.ADMIN}>
                    Admin Page
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link className={checkIsLinkActive(headerRoutes.NASA)} to={headerRoutes.NASA}>
                    Nasa
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link
                    className={checkIsLinkActive(headerRoutes.STYLESHEET)}
                    to={headerRoutes.STYLESHEET}
                >
                    Styles examples
                </Link>
            </Typography>
        </AppBar>
    );
}
