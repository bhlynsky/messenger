const groupActions = {};

groupActions.actionType = {
    LOADING_START: '[GROUP]Loading start',
    LOADING_SUCCESS: '[GROUP]Loading success',
    LOADING_ERROR: '[GROUP]Loading Error',

    CHANGE_CURRENT_GROUP: '[MAIN]Change active group',
    CREATE_NEW_GROUP: '[MAIN]Create Group',
    SEND_MESSAGE: '[MAIN]Send message',
};

groupActions.createNewGroup = (group) => ({
    type: groupActions.actionType.CREATE_NEW_GROUP,
    group,
});

groupActions.changeCurrentGroup = (groupId, groupName) => ({
    type: groupActions.actionType.CHANGE_CURRENT_GROUP,
    groupId,
    groupName,
});

groupActions.loadGroups = () => ({
    type: groupActions.actionType.LOADING_START,
});

groupActions.loadGroupsSuccess = (groups) => ({
    type: groupActions.actionType.LOADING_SUCCESS,
    groups,
});

groupActions.loadGroupError = (error) => ({
    type: groupActions.actionType.LOADING_ERROR,
    error,
});

export { groupActions };
