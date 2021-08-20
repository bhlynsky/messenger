import nasaActions from './nasa-actions';
import { initialState } from './nasa-services';

function nasaReducer(state = initialState, action) {
    switch (action.type) {
        //load data
        case nasaActions.actionType.LOAD:
            return {
                ...state,
                isLoading: true,
            };
        //load success
        case nasaActions.actionType.LOAD_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            };
        //load error
        case nasaActions.actionType.LOAD_ERROR: {
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
