const groupActions = {};

groupActions.actionType = {
    LOADING_ERROR: '[MAIN]Loading Error',
    LOAD_GROUPS: '[MAIN]Load groups',
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

groupActions.loadGroupData = (data) => ({
    type: groupActions.actionType.LOAD_GROUPS,
    data,
});

export { groupActions };
