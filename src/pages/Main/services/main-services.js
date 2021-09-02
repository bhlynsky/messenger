import { messageActions } from '../components/Messenger/services/message-actions';
import { mockGroupData, mockMessageData } from './mockApi';

const initialState = {
    currentGroup: {},
    groups: [],
    messages: [],
    isMessagesLoading: false,
    isGroupsLoading: false,
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

const getGroups = async (userId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/group/${userId}`);

        if (!response.ok) throw new Error(response.statusText);

        const group = await response.json();
        return group;
    } catch (err) {
        console.error(err);
    }
};

const getMessages = (userId) => async (dispatch) => {
    dispatch(messageActions.loadMessages());
    try {
        const response = await fetch(`http://localhost:8080/api/message/user/${userId}`);

        if (!response.ok) throw new Error(response.statusText);

        const message = await response.json();
        dispatch(messageActions.loadMessagesSuccess(message));
    } catch (err) {
        dispatch(messageActions.loadMessagesError(err));
    }
};

export { initialState, fileService, checkLocalStorage, getGroups, getMessages };
