const initialState = {
    currentGroup: {},
    groups: [],
    messages: [],
    isMessagesLoading: false,
    isGroupsLoading: false,
    createGroupLoading: false,
    sendMessageLoading: false, // not sure where to use it
};

const fileService = {};

const getMessagesFromFile = async () => {
    const filePath = 'messageData.txt';
    const response = await fetch(filePath);
    const result = await response.text();

    return result;
};

const getGroupsFromFile = async () => {
    const filePath = 'groupData.txt';
    const response = await fetch(filePath);
    const result = await response.text();

    return result;
};


export { initialState, fileService };

