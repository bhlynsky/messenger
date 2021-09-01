import { authActions } from './auth-actions';

const authService = {};

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

authService.register = async (data) => {
    const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const user = response.json();
    return user;
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
        console.log(user);
        dispatch(authActions.loginSuccess(user));
    } catch (err) {
        dispatch(authActions.loginError(err));
    }
};

export { authService, initialState };
