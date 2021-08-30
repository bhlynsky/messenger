import { authActions } from './auth-actions';
import { initialState } from './auth-services';

function authReducer(state = initialState, action) {
    switch (action.type) {
        //load data
        case authActions.actionType.LOGIN_START:
            return {
                ...state,
                isLoading: true,
            };
        //load success
        case authActions.actionType.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoading: false,
            };
        //load error
        case authActions.actionType.LOGIN_ERROR: {
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
export default authReducer;
