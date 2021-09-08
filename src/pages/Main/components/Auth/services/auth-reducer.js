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
                /// only difference here
                isLoading: false,
            };
        //load error
        case authActions.actionType.REGISTER_ERROR: {
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        }
        case authActions.logout: {
            return initialState;
        }
        default:
            return state;
    }
}
export default authReducer;
