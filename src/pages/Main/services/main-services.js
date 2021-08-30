import { mockGroupData, mockMessageData } from './mockApi';

const initialState = {
    currentGroup: {},
    groups: [],
    messages: [],
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

const checkLocalStorage = () => {
    if (!localStorage.getItem('groupData') && !localStorage.getItem('messageData')) {
        localStorage.setItem('groupData', JSON.stringify(mockGroupData));
        localStorage.setItem('messageData', JSON.stringify(mockMessageData));
    }
};

export { initialState, fileService, checkLocalStorage };
