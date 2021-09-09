import { authActions } from './auth-actions';

const authService = {};

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

authService.register = (data) => async (dispatch) => {
    dispatch(authActions.registerStart());
    try {
        const response = await fetch('http://localhost:8080/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) throw new Error(response.json());

        dispatch(authActions.registerSuccess());
        const user = response.json();
        return user;
    } catch (err) {
        dispatch(authActions.registerError(err.message));
    }
};

authService.login = (data) => async (dispatch) => {
    dispatch(authActions.loginStart());

    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        //hadle errors
        if (!response.ok) throw new Error('You are using wrong Email or password');

        const user = await response.json();

        dispatch(authActions.loginSuccess(user));
    } catch (err) {
        dispatch(authActions.loginError(err.message));
    }
};

const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export { authService, initialState, validateEmail };
