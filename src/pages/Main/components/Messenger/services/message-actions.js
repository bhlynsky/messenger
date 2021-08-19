const messageActions = {};

messageActions.actionType = {
    SEND_MESSAGE: '[MAIN]Send message',
    LOADING_ERROR: '[MAIN]Loading Error',
    LOAD_MESSAGES: '[MAIN]Load messages',
    CHANGE_CURRENT_GROUP: '[MAIN]Change active group',
    CREATE_NEW_GROUP: '[MAIN]Create Group',
};

messageActions.sendMessage = (newMessages, newGroups, message) => ({
    type: messageActions.actionType.SEND_MESSAGE,
    newMessages,
    newGroups,
    message,
});

messageActions.loadMessageData = (data) => ({
    type: messageActions.actionType.LOAD_MESSAGES,
    data,
});

export { messageActions };
