import { actionType } from './main-constants';

const sendMessage = (groupId, message) => ({
    type: actionType.SEND_MESSAGE,
    groupId,
    message,
});

const loadGroupData = () => ({
    type: actionType.LOAD_GROUPS,
});
const loadMessageData = () => ({
    type: actionType.LOAD_MESSAGES,
});

const changeCurrentGroup = (groupId, groupName) => ({
    type: actionType.CHANGE_CURRENT_GROUP,
    groupId,
    groupName,
});

export { loadGroupData, loadMessageData, sendMessage, changeCurrentGroup };
