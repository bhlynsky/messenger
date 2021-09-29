const initialState = {
    currentGroup: {},
    groups: [],
    messages: [],
    isMessagesLoading: false,
    isGroupsLoading: false,
    createGroupLoading: false,
    sendMessageLoading: false,
    isMembersListLoading: false,
};

const fileService = {};

fileService.getMessagesFromFile = async () => {
    const filePath = 'messageData.txt';
    const response = await fetch(filePath);
    const result = await response.text();

    return result;
};

fileService.getGroupsFromFile = async () => {
    const filePath = 'groupData.txt';
    const response = await fetch(filePath);
    const result = await response.text();

    return result;
};

export { initialState, fileService };
