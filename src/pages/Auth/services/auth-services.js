import { authActions } from './auth-actions';

const authService = {};

const initialState = {
    user: null,
    isLoading: false,
    registerSuccess: false,
    error: null,
};

const handleResponse = (response) => {
    return response.json().then((json) => {
        if (!response.ok) {
            const error = { ...json, status: response.status, statusText: response.statusText };
            return Promise.reject(error.message);
        }
        return json;
    });
};

authService.register = (data) => (dispatch) => {
    dispatch(authActions.registerStart());

    fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((res) => handleResponse(res))
        .then(() => dispatch(authActions.registerSuccess()))
        .catch((err) => dispatch(authActions.registerError(err)));
};

authService.login = (data) => (dispatch) => {
    dispatch(authActions.loginStart());

    fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((res) => handleResponse(res))
        .then((user) => dispatch(authActions.loginSuccess(user)))
        .catch((err) => dispatch(authActions.loginError(err)));
};

//FIXME What actually do this regular expression ?
const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export { authService, initialState, validateEmail };
