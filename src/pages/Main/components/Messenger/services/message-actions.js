const messageActions = {};

messageActions.actionType = {
    LOADING_START: '[MESSAGE]Loading start',
    LOADING_SUCCESS: '[MESSAGE]Loading success',
    LOADING_ERROR: '[MESSAGE]Loading Error',

    SEND_MESSAGE_START: '[MESSAGE] Send message start',
    SEND_MESSAGE_SUCCESS: '[MESSAGE] Send message success',
    SEND_MESSAGE_ERROR: '[MESSAGE] Send message error',

    CHANGE_CURRENT_GROUP: '[MAIN]Change active group',
    CREATE_NEW_GROUP: '[MAIN]Create Group',
};

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

messageActions.sendMessageSuccess = (newMessages, newGroups, message) => ({
    type: messageActions.actionType.SEND_MESSAGE,
    newMessages,
    newGroups,
    message,
});

messageActions.sendMessageStart = () => ({
    type: messageActions.SEND_MESSAGE_START,
});

messageActions.sendMessageError = (error) => ({
    type: messageActions.SEND_MESSAGE_ERROR,
    error,
});

export { messageActions };
