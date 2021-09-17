import { authActions } from './auth-actions';
import { authErrors } from './auth-constants';

const authService = {};

const initialState = {
    user: null,
    isLoading: false,
    registerSuccess: false,
    error: null,
};

///             HTTP authorization/authentication requests

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

//              Form validation & helper functions

//FIXME What actually do this regular expression ?
//it checks for email correctness. I found it on stackoverflow, seems like it works fine.
const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateRegisterForm = (registerData, confirmPassword) => {
    const { password, email, username } = registerData;

    const minPasswordLength = 6;
    const minUserNameLength = 6;

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
        if (password.length < minPasswordLength && confirmPassword.length < minPasswordLength) {
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
