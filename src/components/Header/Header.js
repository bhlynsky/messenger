import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Typography,
    Switch,
    Tooltip,
    Button,
    useMediaQuery,
    IconButton,
    Menu,
    MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useLocation, Redirect } from 'react-router-dom';
import { headerRoutes } from '../../services/headerRoutes';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { connect } from 'react-redux';
import rootActions from '../../services/root-actions';
import { authActions } from '../Auth/services/auth-actions';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderLinks = () => {
    const classes = useStyles();
    const location = useLocation().pathname;

    const checkIsLinkActive = (route) => {
        return route === location ? classes.activeLink : classes.link;
    };

    return (
        <div className={classes.header}>
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
        </div>
    );
};

const HeaderLinksMenu = () => {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const location = useLocation().pathname;

    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };

    const checkIsLinkActive = (route) => {
        return route === location ? classes.menuLinkActive : classes.menuLink;
    };

    return (
        <div>
            <IconButton
                className={classes.menuButton}
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
            >
                <MenuIcon color="secondary" />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchor} open={open} className={classes.menu}>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    className={
                        location.includes('/main') ? classes.menuLinkActive : classes.menuLink
                    }
                    to="/main/1"
                >
                    Main Page
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    className={checkIsLinkActive(headerRoutes.USER)}
                    to={headerRoutes.USER}
                >
                    User Page
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    className={checkIsLinkActive(headerRoutes.ADMIN)}
                    to={headerRoutes.ADMIN}
                >
                    Admin Page
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    className={checkIsLinkActive(headerRoutes.NASA)}
                    to={headerRoutes.NASA}
                >
                    Nasa
                </MenuItem>
                <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    className={checkIsLinkActive(headerRoutes.STYLESHEET)}
                    to={headerRoutes.STYLESHEET}
                >
                    Styles Examples
                </MenuItem>
            </Menu>
        </div>
    );
};

function Header({ changeTheme, isDarkTheme, user, logout }) {
    const classes = useStyles();

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const toggleTheme = () => {
        localStorage.setItem('darkTheme', !isDarkTheme);
        changeTheme();
    };

    const onLogout = () => {
        logout();
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkTheme');
        if (savedTheme === 'true') {
            changeTheme();
        }
    }, []);

    return (
        <AppBar className={classes.header}>
            
            {user && (isSmallScreen ? <HeaderLinksMenu /> : <HeaderLinks />)}
            {user && <Redirect to="/" />}

            <div className={classes.darkModeToggle}>
                <Tooltip title="Toggle dark theme">
                    <Switch checked={isDarkTheme} onChange={toggleTheme} />
                </Tooltip>
                <Brightness4Icon className={classes.darkModeIcon} />
            </div>

            <Button onClick={user && onLogout} className={classes.loginButton}>
                <Link className={classes.loginLink} to={headerRoutes.LOGIN}>
                    {user ? 'Logout' : 'Login'}
                </Link>
            </Button>
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
