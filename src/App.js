import React from 'react';
import Header from './components/Header/Header';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/Main/MainPage';
import UserPage from './pages/User/UserPage';
import TaskPage from './pages/TaskPage';
import Stylesheets from './pages/Stylesheets/Stylesheets';
import NasaPicsPage from './pages/NasaPics/NasaPicsPage';
import { useStyles } from './styles';
import { CustomThemeProvider } from './ThemeHandler';
import { Paper } from '@material-ui/core';
import Login from './pages/Main/components/Auth/Login/Login';
import Register from './pages/Main/components/Auth/Register/Register';

const Router = () => {
    const classes = useStyles();
    return (
        <Paper square className={classes.paper}>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Redirect to="/main/1" />
                </Route>
                <Route path="/main/:groupId">
                    <MainPage />
                </Route>
                <Route path="/user">
                    <UserPage />
                </Route>
                <Route path="/admin">
                    <AdminPage />
                </Route>
                <Route path="/tasks">
                    <TaskPage />
                </Route>
                <Route path="/stylesheet">
                    <Stylesheets />
                </Route>
                <Route path="/nasa">
                    <NasaPicsPage />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Paper>
    );
};

function App() {
    return (
        <HashRouter>
            <CustomThemeProvider>
                <Router />
            </CustomThemeProvider>
        </HashRouter>
    );
}

export { App };
