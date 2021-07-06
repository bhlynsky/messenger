import './styles.scss';
import Header from './components/Header';
import { Route, Switch, HashRouter } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

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
      </Switch>
    </HashRouter>
  );
}

export default App;
