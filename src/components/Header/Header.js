import React from 'react';
import { AppBar, Typography, Switch, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';
import { headerRoutes } from '../../services/headerRoutes';
import { useThemeContext } from '../../ThemeHandler';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function Header() {
    const classes = useStyles();
    const location = useLocation().pathname;

    const { isDarkMode, setDarkMode } = useThemeContext();

    const checkIsLinkActive = (route) => {
        return route === location ? classes.activeLink : classes.link;
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
            <Typography variant="subtitle1" align="left">
                <Link className={checkIsLinkActive(headerRoutes.LOGIN)} to={headerRoutes.LOGIN}>
                    Login
                </Link>
            </Typography>

            <div className={classes.darkModeToggle}>
                <Tooltip title="Toggle dark mode">
                    <Switch checked={isDarkMode} onChange={() => setDarkMode(!isDarkMode)} />
                </Tooltip>
                <Brightness4Icon className={classes.darkModeIcon} />
            </div>
        </AppBar>
    );
}
