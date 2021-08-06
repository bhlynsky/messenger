const actionType = {
    SEND_MESSAGE: '[MAIN]Send message',
    LOADING_ERROR: '[MAIN]Loading Error',
    LOAD_GROUPS: '[MAIN]Load groups',
    CHANGE_CURRENT_GROUP: '[MAIN]Change active group',
    LOAD_MESSAGES: '[MAIN]Load messages',
    CREATE_NEW_GROUP: '[MAIN]Create Group',
};

const labels = {
    SIDEBAR_HEADER: 'Current group',
    SIDEBAR_NO_GROUPS: 'No Groups!',
    MESSAGE_INPUT_PLACEHOLDER: 'Write Your Message',
    SEARCH_MESSAGES: 'Search messages in this group.',
    NO_MESSAGES: 'No messages in this group yet...',
};

const createGroupLabels = {
    ICON_TOOLTIP: 'New group',
    HEADER: 'Create new Group!',
    NAME_INPUT: 'New Group Name',
    SUBTITLE_NAME: 'Come up with name',
    SUBTITLE_ADD_USERS: 'Add users to your group',
    ERROR_NO_GROUPNAME: 'Group name is required',
    ERROR_NO_USERS: 'You need to add users to your group',
    PATRICIPANTS: 'Participants',
    SELECT_PLACEHOLDER: 'Select someone',
};

const actionButtons = {
    SAVE: 'Save',
    CLOSE: 'Close',
};

export { actionType, labels, createGroupLabels, actionButtons };
