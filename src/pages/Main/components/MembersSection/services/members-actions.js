const membersActions = {};

membersActions.actionType = {
    MEMBERS_LOADING: '[MAIN] Meber list loading start',
    UPDATE_MEMBERS: '[MAIN] Update members',
    MEMBERS_LOADING_ERROR: '[MAIN] Members list loading error ',
};

membersActions.loadMembers = () => ({
    type: membersActions.actionType.MEMBERS_LOADING,
});

membersActions.updateGroupMembers = (newMembers) => ({
    type: membersActions.actionType.UPDATE_MEMBERS,
    newMembers,
});

membersActions.loadMembersError = (error) => ({
    type: membersActions.actionType.MEMBERS_LOADING_ERROR,
    error,
});

export { membersActions };
