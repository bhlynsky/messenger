const userActions = {};

userActions.actionsType = {
    CHANGE_DATA: 'CHANGE DATA',
};

userActions.changeData = (user) => {
    return {
        type: userActions.actionsType.CHANGE_DATA,
        user
    };
}

export default userActions;

