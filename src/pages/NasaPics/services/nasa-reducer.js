import { applyMiddleware, createStore } from 'redux';
import actionType from './nasa-constants';
import thunk from 'redux-thunk';
import { initialState } from './nasa-services';
//TODO add initial state
function nasaReducer(state = initialState, action) {
    switch (action.type) {
        //load data
        case actionType.LOAD:
            return {
                ...state,
                isLoading: true,
            };
        //load success
        case actionType.SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            };
        //load error
        case actionType.ERORR: {
            return {
                ...state,
                erorr: action.error,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}
export const nasaStore = createStore(nasaReducer, applyMiddleware(thunk));
