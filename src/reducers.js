import nasaReducer from './pages/NasaPics/services/nasa-reducer';
import mainReducer from './pages/Main/services/main-reducer';
import userReducer from './pages/User/services/user-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    nasaReducer,
    mainReducer,
    userReducer,
});

export default reducer;
