const authErrors = {
    PASSWORD_TOO_SHORT: 'Password should be at least 6 characters',
    INVALID_EMAIL: 'Email is invalid.',
    EMPTY_FIELDS: 'Fields must not be empty.',
    WRONG_CREDENTIALS: 'You are using wrong Email or password',
    PASSWORDS_NOT_MATCHING: 'Passwords arent matching.',
    NAME_TOO_SHORT: 'Name must be at least 6 characters',
};

const labels = {
    LOGIN: 'Log in',
    EMAIL: 'Email Address',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    PASSWORD_CONFIRM: 'Confirm password',
    SIGN_IN_BUTTON: 'Sign in',
    REGISTER_LINK_TEXT: "Don't have an account? Create new.",
    REGISTER: 'Create new account',
    REGISTER_SUBMIT_BUTTON: 'Create new account',
};
export { authErrors, labels };
