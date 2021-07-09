import './styles.scss';
import Header from './components/Header/Header';
import { Route, Switch, HashRouter } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/User/UserPage';
import TaskPage from './pages/TaskPage';
import Stylesheets from './pages/Stylesheets';

function App() {
    return (
        <HashRouter>
            <Header />

            <Switch>
                <Route path="/main">
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
            </Switch>
        </HashRouter>
    );
}

export default App;
