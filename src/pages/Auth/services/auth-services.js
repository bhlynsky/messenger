import { authActions } from './auth-actions';
import { authErrors } from './auth-constants';
import { handleFetchResponse, fetchWithTimeout } from '../../../services/root-service';
const authService = {};

const initialState = {
    user: null,
    isLoading: false,
    registerSuccess: false,
    error: null,
};

///             HTTP authorization/authentication requests

authService.register = (data) => (dispatch) => {
    dispatch(authActions.registerStart());

    const url = 'http://localhost:8080/api/auth/register';
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    fetchWithTimeout(url, options)
        .then((res) => handleFetchResponse(res))
        .then(() => dispatch(authActions.registerSuccess()))
        .catch((err) => dispatch(authActions.registerError(err)));
};

authService.login = (data) => (dispatch) => {
    dispatch(authActions.loginStart());

    const url = 'http://localhost:8080/api/auth/login';
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    fetchWithTimeout(url, options)
        .then((res) => handleFetchResponse(res))
        .then((user) => dispatch(authActions.loginSuccess(user)))
        .catch((err) => dispatch(authActions.loginError(err)));
};

//              Form validation & helper functions

//it checks for email correctness. I found it on stackoverflow, seems like it works fine.
const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateRegisterForm = (registerData, confirmPassword) => {
    const { password, email, username } = registerData;

    const minPasswordLength = 6;
    const minUserNameLength = 3;

    const errors = {
        email: '',
        password: '',
        username: '',
    };

    if (password && email && username) {
        if (!validateEmail(email)) {
            errors.email = authErrors.INVALID_EMAIL;
        }

        if (username.length < minUserNameLength) {
            errors.username = authErrors.NAME_TOO_SHORT;
        }

        if (password.length < minPasswordLength) {
            errors.password = authErrors.PASSWORD_TOO_SHORT;
        }

        if (password !== confirmPassword) {
            errors.password = authErrors.PASSWORDS_NOT_MATCHING;
        }
    } else {
        Object.keys(registerData).forEach((key) => {
            if (!registerData[key]) {
                errors[key] = authErrors.EMPTY_FIELDS;
            }
        });

        if (!confirmPassword) errors.password = authErrors.EMPTY_FIELDS;
    }

    return errors;
};

const validateLoginForm = (loginData) => {
    const { password, email } = loginData;

    const errors = {
        email: '',
        password: '',
    };

    if (password && email) {
        if (!validateEmail(email)) {
            errors.email = authErrors.INVALID_EMAIL;
        }

        if (password.length < 6) {
            errors.password = authErrors.PASSWORD_TOO_SHORT;
        }
    } else {
        Object.keys(loginData).forEach((key) => {
            if (!loginData[key]) {
                errors[key] = authErrors.EMPTY_FIELDS;
            }
        });
    }

    return errors;
};

export { authService, initialState, validateEmail, validateRegisterForm, validateLoginForm };
