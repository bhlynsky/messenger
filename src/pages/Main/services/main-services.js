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

const authService = {};

authService.register = async (data) => {
    const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const user = await response.json();
    return user;
};
authService.login = async (data) => {
    const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const user = response.json();
    return user;
};

export { initialState, fileService, authService, checkLocalStorage };
