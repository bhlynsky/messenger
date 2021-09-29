const authActions = {};

authActions.actionType = {
    LOGIN_START: '[AUTH] Login start',
    LOGIN_SUCCESS: '[AUTH] Login successfull',
    LOGIN_ERROR: '[AUTH] Login error',
    REGISTER_START: '[AUTH] Register start',
    REGISTER_SUCCESS: '[AUTH] Register successfull',
    REGISTER_ERROR: '[AUTH] Register error',
    LOGOUT: '[AUTH] Logout',
    REMOVE_ERROR: '[AUTH] Remove error',
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

authActions.registerStart = () => ({
    type: authActions.actionType.REGISTER_START,
});

authActions.registerSuccess = () => ({
    type: authActions.actionType.REGISTER_SUCCESS,
});

authActions.registerError = (error) => ({
    type: authActions.actionType.REGISTER_ERROR,
    error,
});

authActions.logout = () => ({
    type: authActions.actionType.LOGOUT,
});

authActions.resetError = () => ({
    type: authActions.actionType.REMOVE_ERROR,
});

export { authActions };
