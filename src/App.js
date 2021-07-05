import './styles.scss';
import Header from './components/Header';
import { Route, Switch, HashRouter } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a71c1b',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
