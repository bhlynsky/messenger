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
        if (!response.ok) throw new Error(response.statusText);

        dispatch(authActions.registerSuccess());
        const user = response.json();
        return user;
    } catch (err) {
        dispatch(authActions.registerError(err));
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
        if (!response.ok) throw new Error(response.statusText);

        const user = await response.json();

        dispatch(authActions.loginSuccess(user));
    } catch (err) {
        dispatch(authActions.loginError(err));
    }
};

export { authService, initialState };
