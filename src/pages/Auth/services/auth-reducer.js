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
            const { error } = action;
            return {
                ...state,
                error: error.message || error, // fetch returns error object, when server offline. Easiest fix imo.
                isLoading: false,
            };
        }
        // is it considered right to combine loading proccess for register and login?
        //because current approach makes kinda duplicate code (tbh its just copypasta)
        case authActions.actionType.REGISTER_START:
            return {
                ...state,
                isLoading: true,
            };
        //load success
        case authActions.actionType.REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true,
                isLoading: false,
            };
        //load error
        case authActions.actionType.REGISTER_ERROR: {
            const { error } = action;

            return {
                ...state,
                error: error.message || error,
                isLoading: false,
            };
        }
        case authActions.actionType.REMOVE_ERROR: {
            return { ...state, error: null };
        }
        default:
            return state;
    }
}
export default authReducer;
