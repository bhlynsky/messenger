import React from 'react';
import Header from './components/Header/Header';
import { Route, Switch, HashRouter } from 'react-router-dom';
import AdminPage from './pages/Admin/AdminPage';
import MainPage from './pages/Main/MainPage';
import UserPage from './pages/User/UserPage';
import TaskPage from './pages/TaskPage';
import Stylesheets from './pages/Stylesheets/Stylesheets';
import NasaPicsPage from './pages/NasaPics/NasaPicsPage';
import CustomThemeProvider from './CustomThemeProvider';
import Login from './pages/Main/components/Auth/Login/Login';
import Register from './pages/Main/components/Auth/Register/Register';
import PrivateRoute from './PrivateRoute';
import StartPage from './pages/Start/StartPage';
const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <StartPage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <PrivateRoute path="/main/:groupId">
                <MainPage />
            </PrivateRoute>
            <PrivateRoute path="/user">
                <UserPage />
            </PrivateRoute>
            <PrivateRoute path="/admin">
                <AdminPage />
            </PrivateRoute>
            <PrivateRoute path="/tasks">
                <TaskPage />
            </PrivateRoute>
            <PrivateRoute path="/stylesheet">
                <Stylesheets />
            </PrivateRoute>
            <PrivateRoute path="/nasa">
                <NasaPicsPage />
            </PrivateRoute>
        </Switch>
    );
};

function App() {
    return (
        <HashRouter>
            <CustomThemeProvider>
                <Header />
                <Router />
            </CustomThemeProvider>
        </HashRouter>
    );
}

export default App;
