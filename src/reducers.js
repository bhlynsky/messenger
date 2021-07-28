import nasaReducer from './pages/NasaPics/services/nasa-reducer';
import sidebarReducer from './pages/Main/components/Sidebar/services/sidebar-reducer';
import messageReducer from './pages/Main/components/Messenger/services/message-reducer';
import userReducer from './pages/User/services/user-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    nasaReducer,
    sidebarReducer,
    messageReducer,
    userReducer,
});

export default reducer;
