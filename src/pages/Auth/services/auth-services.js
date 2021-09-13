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

const checkEmptyFields = (registerData, confirmPassword) => {
    // returns key in string format
    if (!registerData.email) {
        return 'emailError';
    }
    if (!registerData.username) {
        return 'usernameError';
    }
    if (!registerData.password) {
        return 'passwordError';
    }
    if (!confirmPassword) {
        return 'passwordError';
    }
};

const validateRegisterForm = (registerData, confirmPassword, changeErrorValue, register) => {
    const { password, email, username } = registerData;

    if (password && email && username) {
        if (!validateEmail(email)) {
            changeErrorValue('emailError', authErrors.INVALID_EMAIL);
            return;
        }
        if (username.length < 6) {
            changeErrorValue('usernameError', authErrors.NAME_TOO_SHORT);
            return;
        }
        if (password.length < 6 && confirmPassword.length < 6) {
            changeErrorValue('passwordError', authErrors.PASSWORD_TOO_SHORT);
            return;
        }
        if (password !== confirmPassword) {
            changeErrorValue('passwordError', authErrors.PASSWORDS_NOT_MATCHING);
            return;
        }

        register(registerData); // when check passed we can finnaly execute register
    } else {
        const emptyField = checkEmptyFields(registerData, confirmPassword);
        changeErrorValue(emptyField, authErrors.EMPTY_FIELDS);
    }
};

const validateLoginForm = (loginData, setEmailError, setPasswordError, login) => {
    const { password, email } = loginData;

    if (password && email) {
        if (!validateEmail(email)) {
            setEmailError(authErrors.INVALID_EMAIL);
            return;
        }
        if (password.length < 6) {
            setPasswordError(authErrors.PASSWORD_TOO_SHORT);
            return;
        }

        login(loginData); // when check passed we can finnaly execute login
    } else {
        if (!loginData.email) {
            setEmailError(authErrors.EMPTY_FIELDS);
        }
        if (!loginData.password) {
            setPasswordError(authErrors.EMPTY_FIELDS);
        }
    }
};

export { authService, initialState, validateEmail, validateRegisterForm, validateLoginForm };
