import actionType from './nasa-constants';
import { initialState } from './nasa-services';

function nasaReducer(state = initialState, action) {
    switch (action.type) {
        //load data
        case actionType.LOAD:
            return {
                ...state,
                isLoading: true,
            };
        //load success
        case actionType.LOAD_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            };
        //load error
        case actionType.LOAD_ERROR: {
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}
export default nasaReducer;
