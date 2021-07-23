import nasaReducer from './pages/NasaPics/services/nasa-reducer';
import groupReducer from './pages/Main/services/group-reducer';
import messageReducer from './pages/Main/services/message-reducer';
import userReducer from './pages/User/services/user-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    nasaReducer,
    groupReducer,
    messageReducer,
    userReducer,
});

export default reducer;
