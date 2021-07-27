const initialState = {
    currentGroup: {},
    groups: [],
    messages: [],
};

const getMessagesFromFile = async () => {
    const filePath = 'messageData.txt';
    const response = await fetch(filePath);
    const result = await response.text();
    return result;
};

const getGroupsFromFile = async () => {
    const filePath = 'groupData.txt';
    let response = await fetch(filePath);
    const result = await response.text();
    return result;
};

export { initialState, getGroupsFromFile, getMessagesFromFile };
