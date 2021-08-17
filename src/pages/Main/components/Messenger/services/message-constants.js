const actionType = {
    SEND_MESSAGE: '[MAIN]Send message',
    LOADING_ERROR: '[MAIN]Loading Error',
    LOAD_MESSAGES: '[MAIN]Load messages',
    CHANGE_CURRENT_GROUP: '[MAIN]Change active group',
    CREATE_NEW_GROUP: '[MAIN]Create Group',
};

const labels = {
    SIDEBAR_HEADER: 'Current group',
    SIDEBAR_NO_GROUPS: 'No Groups!',
    MESSAGE_INPUT_PLACEHOLDER: 'Write Your Message',
    SEARCH_MESSAGES: 'Search messages in this group.',
    NO_MESSAGES: 'No messages in this group yet...',
};

export { actionType, labels };
