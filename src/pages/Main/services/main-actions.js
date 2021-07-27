import { actionType } from './main-constants';

const sendMessage = (groupId, message) => ({
    type: actionType.SEND_MESSAGE,
    groupId,
    message,
});

const loadGroupData = (data) => ({
    type: actionType.LOAD_GROUPS,
    data,
});
const loadMessageData = (data) => ({
    type: actionType.LOAD_MESSAGES,
    data,
});

const changeCurrentGroup = (groupId, groupName) => ({
    type: actionType.CHANGE_CURRENT_GROUP,
    groupId,
    groupName,
});

export { loadGroupData, loadMessageData, sendMessage, changeCurrentGroup };
