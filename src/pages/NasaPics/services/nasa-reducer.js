import { applyMiddleware, createStore } from 'redux';
import action_type from './nasa-constants';
import thunk from 'redux-thunk';

//TODO add initial state
function nasaReducer(state, action) {
    switch (action.type) {
        //load data
        // case action_type.LOAD:
        //     return {
        //         ...state,
        //         isLoading: true
        //     };
        //load success
        case action_type.LOAD:
            return {
                ...state,
                data: action.data,
                isLoading: false
            };
        default:
            return state;
    }
}
export const nasaStore = createStore(nasaReducer, applyMiddleware(thunk));
