import React, { useEffect } from 'react';
import { AppBar, Typography, Switch, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';
import { headerRoutes } from '../../services/headerRoutes';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { connect } from 'react-redux';
import rootActions from '../../services/root-actions';

function Header({ changeTheme, isDarkTheme }) {
    const classes = useStyles();
    const location = useLocation().pathname;

    const checkIsLinkActive = (route) => {
        return route === location ? classes.activeLink : classes.link;
    };

    const toggleTheme = () => {
        localStorage.setItem('darkTheme', !isDarkTheme);
        changeTheme();
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkTheme');
        if (savedTheme === 'true') {
            changeTheme();
        }
    }, []);

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
            <Typography variant="subtitle1">
                <Link className={checkIsLinkActive(headerRoutes.LOGIN)} to={headerRoutes.LOGIN}>
                    Login
                </Link>
            </Typography>

            <div className={classes.darkModeToggle}>
                <Tooltip title="Toggle dark theme">
                    <Switch checked={isDarkTheme} onChange={toggleTheme} />
                </Tooltip>
                <Brightness4Icon className={classes.darkModeIcon} />
            </div>
        </AppBar>
    );
}
const mapDispatchToProps = (dispatch) => ({
    changeTheme: () => {
        dispatch(rootActions.changeTheme());
    },
});

const mapStateToProps = (state) => ({
    isDarkTheme: state.rootReducer.isDarkTheme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
