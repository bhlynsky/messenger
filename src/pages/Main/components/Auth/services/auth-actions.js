const authActions = {};

authActions.actionType = {
    LOGIN_START: '[AUTH] Login start',
    LOGIN_SUCCESSFULL: '[AUTH] Login successfull',
    LOGIN_ERROR: '[AUTH] Login error',
};

authActions.loginStart = () => ({
    type: authActions.actionType.LOGIN_START,
});

authActions.loginSuccess = (user) => ({
    type: authActions.actionType.LOGIN_SUCCESS,
    payload: user,
});

authActions.loginError = (error) => ({
    type: authActions.actionType.LOGIN_ERROR,
    payload: error,
});
export { authActions };
