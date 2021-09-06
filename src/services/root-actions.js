const rootActions = {};

rootActions.actionType = {
    CHANGE_THEME: '[ROOT] Change theme',
};

rootActions.changeTheme = () => ({
    type: rootActions.actionType.CHANGE_THEME,
});

export default rootActions;
