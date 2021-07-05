import logo from './logo.svg';
import './App.css';
import "./styles.scss"
import Header from './Components/header';
import { Route, BrowserRouter as Router, Switch ,HashRouter} from 'react-router-dom';
import AdminPage from './Pages/adminPage';
import MainPage from './Pages/mainPage';
import UserPage from './Pages/userPage';

function App() {
  return (
    <div>
      <HashRouter >
      <Header></Header>

      <Switch>
        <Route path="/main">
          <MainPage/>
        </Route>
        <Route path="/user">
          <UserPage/>
        </Route>
        <Route path="/admin">
          <AdminPage/>
        </Route>

      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
