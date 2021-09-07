const authActions = {};

authActions.actionType = {
    LOGIN_START: '[AUTH] Login start',
    LOGIN_SUCCESS: '[AUTH] Login successfull',
    LOGIN_ERROR: '[AUTH] Login error',
};

authActions.loginStart = () => ({
    type: authActions.actionType.LOGIN_START,
});

authActions.loginSuccess = (user) => ({
    type: authActions.actionType.LOGIN_SUCCESS,
    user,
});

authActions.loginError = (error) => ({
    type: authActions.actionType.LOGIN_ERROR,
    error,
});
export { authActions };
