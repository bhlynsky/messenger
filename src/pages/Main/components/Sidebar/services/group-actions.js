const groupActions = {};

groupActions.actionType = {
    LOADING_START: '[GROUP]Loading start',
    LOADING_SUCCESS: '[GROUP]Loading success',
    LOADING_ERROR: '[GROUP]Loading Error',

    CHANGE_CURRENT_GROUP: '[MAIN]Change active group',

    CREATE_GROUP_START: '[MAIN]Create Group',
    CREATE_GROUP_SUCCESS: '[MAIN]Create Group success',
    CREATE_GROUP_ERROR: '[MAIN]Create Group error',

    SEND_MESSAGE: '[MAIN]Send message',
};

groupActions.createGroupStart = () => ({
    type: groupActions.actionType.CREATE_GROUP_START,
});

groupActions.createGroupSuccess = (group) => ({
    type: groupActions.actionType.CREATE_GROUP_SUCCESS,
    group,
});

groupActions.createGroupError = (error) => ({
    type: groupActions.actionType.CREATE_GROUP_ERROR,
    error,
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

groupActions.loadGroupsError = (error) => ({
    type: groupActions.actionType.LOADING_ERROR,
    error,
});

export { groupActions };
