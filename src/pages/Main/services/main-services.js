import { messageActions } from '../components/Messenger/services/message-actions';
import { groupActions } from '../components/Sidebar/services/group-actions';
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

const getGroups = (userId) => async (dispatch) => {
    dispatch(groupActions.loadGroups());

    try {
        const response = await fetch(`http://localhost:8080/api/group/${userId}`);

        if (!response.ok) throw new Error(response.statusText);

        const groups = await response.json();
        dispatch(groupActions.loadGroupsSuccess(groups));
        return groups; // is it normal to return and dispatch in the same function?
    } catch (err) {
        dispatch(groupActions.loadGroupError(err));
    }
};

const getMessages = (userId) => async (dispatch) => {
    dispatch(messageActions.loadMessages());
    try {
        const response = await fetch(`http://localhost:8080/api/message/user/${userId}`);

        if (!response.ok) throw new Error(response.statusText);

        const messages = await response.json();
        dispatch(messageActions.loadMessagesSuccess(messages));
    } catch (err) {
        dispatch(messageActions.loadMessagesError(err));
    }
};

export { initialState, fileService, checkLocalStorage, getGroups, getMessages };
