import { applyMiddleware, createStore } from 'redux';
import action_type from './nasa-constants';
import thunk from 'redux-thunk';

function nasaReducer(state, action) {
    switch (action.type) {
        case action_type.LOAD:
            return {
                ...state,
                ...action.data,
            };

        default:
            state;
    }
}
export const nasaStore = createStore(nasaReducer, applyMiddleware(thunk));
