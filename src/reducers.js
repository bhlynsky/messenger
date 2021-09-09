import nasaReducer from './pages/NasaPics/services/nasa-reducer';
import groupReducer from './pages/Main/components/Sidebar/services/group-reducer';
import messageReducer from './pages/Main/components/Messenger/services/message-reducer';
import userReducer from './pages/User/services/user-reducer';
import rootReducer from './services/root-reducer';
import authReducer from './components/Auth/services/auth-reducer';
import { combineReducers } from 'redux';
import { authActions } from './components/Auth/services/auth-actions';

const reducers = combineReducers({
    rootReducer,
    nasaReducer,
    groupReducer,
    messageReducer,
    userReducer,
    authReducer,
});

const appReducer = (state, action) => {
    if (action.type === authActions.actionType.LOGOUT) {
        const { rootReducer } = state;
        state = { rootReducer }; // saving root reducer to prevent theme changes after logout
        //other store will be reset to default
    }
    //cleanup local/session storage here?

    return reducers(state, action);
};

export default appReducer;
