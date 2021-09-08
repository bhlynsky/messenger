import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Switch, Tooltip, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useLocation, Redirect } from 'react-router-dom';
import { headerRoutes } from '../../services/headerRoutes';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { connect } from 'react-redux';
import rootActions from '../../services/root-actions';
import { authActions } from '../../pages/Main/components/Auth/services/auth-actions';

function Header({ changeTheme, isDarkTheme, user, logout }) {
    const classes = useStyles();
    const location = useLocation().pathname;

    const [redirectAfterLogout, setRedirect] = useState(false);

    const checkIsLinkActive = (route) => {
        return route === location ? classes.activeLink : classes.link;
    };

    const toggleTheme = () => {
        localStorage.setItem('darkTheme', !isDarkTheme);
        changeTheme();
    };

    const onLogout = () => {
        logout();
        setRedirect(true);
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
                    to="/main/1"
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

            <div className={classes.darkModeToggle}>
                <Tooltip title="Toggle dark theme">
                    <Switch checked={isDarkTheme} onChange={toggleTheme} />
                </Tooltip>
                <Brightness4Icon className={classes.darkModeIcon} />
            </div>
            {user ? (
                <div>
                    <Button color="secondary" onClick={onLogout} className={classes.logoutButton}>
                        Logout
                    </Button>
                    {redirectAfterLogout && <Redirect to="/" />}
                </div>
            ) : (
                <Button variant="subtitle1" className={classes.loginButton}>
                    <Link className={classes.loginLink} to={headerRoutes.LOGIN}>
                        Login
                    </Link>
                </Button>
            )}
        </AppBar>
    );
}

const mapDispatchToProps = (dispatch) => ({
    changeTheme: () => {
        dispatch(rootActions.changeTheme());
    },
    logout: () => {
        dispatch(authActions.logout());
    },
});

const mapStateToProps = (state) => ({
    isDarkTheme: state.rootReducer.isDarkTheme,
    user: state.authReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
