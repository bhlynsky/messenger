import React from 'react';
import Header from './components/Header/Header';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/Main/MainPage';
import UserPage from './pages/User/UserPage';
import TaskPage from './pages/TaskPage';
import Stylesheets from './pages/Stylesheets/Stylesheets';
import NasaPicsPage from './pages/NasaPics/NasaPicsPage';

import { createContext, useContext, useState } from 'react';
import { ThemeProvider, Paper } from '@material-ui/core';
import { lightTheme, darkTheme } from './theme';
import { useStyles } from './styles';

const ThemeContext = createContext({});

function useThemeContext() {
    return useContext(ThemeContext);
}

function CustomThemeProvider(props) {
    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
                {props.children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

function App() {
    const classes = useStyles();
    return (
        <HashRouter>
            <CustomThemeProvider>
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
                    </Switch>
                </Paper>
            </CustomThemeProvider>
        </HashRouter>
    );
}

export { App, useThemeContext };
