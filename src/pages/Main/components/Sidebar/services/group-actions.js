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

    LOAD_LAST_MESSAGE: '[MAIN] Load last message',
    LOAD_LAST_MESSAGE_SUCCESS: '[MAIN] Load last message success',
    LOAD_LAST_MESSAGE_ERROR: '[MAIN] Load last message error',

    UPDATE_MEMBERS: '[GROUP]Update group members',
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

groupActions.changeCurrentGroup = (group) => ({
    type: groupActions.actionType.CHANGE_CURRENT_GROUP,
    group,
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

groupActions.loadLastMessage = () => ({
    type: groupActions.actionType.LOAD_LAST_MESSAGE,
});

groupActions.loadLastMessageSuccess = (message) => ({
    type: groupActions.actionType.LOAD_LAST_MESSAGE_SUCCESS,
    message,
});

groupActions.loadLastMessageError = (error) => ({
    type: groupActions.actionType.LOAD_LAST_MESSAGE_ERROR,
    error,
});

groupActions.updateGroupMembers = (newMembers) => ({
    type: groupActions.actionType.UPDATE_MEMBERS,
    newMembers,
});

export { groupActions };
