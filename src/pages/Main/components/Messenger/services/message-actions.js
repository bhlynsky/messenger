const messageActions = {};

messageActions.actionType = {
    SEND_MESSAGE: '[MAIN]Send message',
    LOADING_START: '[MESSAGE]Loading start',
    LOADING_SUCCESS: '[MESSAGE]Loading success',
    LOADING_ERROR: '[MESSAGE]Loading Error',
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

messageActions.loadMessages = () => ({
    type: messageActions.actionType.LOADING_START,
});

messageActions.loadMessagesSuccess = (messages) => ({
    type: messageActions.actionType.LOADING_SUCCESS,
    messages,
});

messageActions.loadMessagesError = (error) => ({
    type: messageActions.actionType.LOADING_ERROR,
    error,
});

export { messageActions };
