import nasaReducer from './pages/NasaPics/services/nasa-reducer';
import mainReducer from './pages/Main/services/main-reducer';
import userReducer from './pages/User/services/user-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    //FIXME naming of reducers not schould be in upper case
    Nasa: nasaReducer,
    Main: mainReducer,
    User: userReducer,
});

export default reducer;
