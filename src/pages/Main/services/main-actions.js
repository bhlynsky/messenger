import actionType from './main-constants';

const sendMessage = (message) => ({
    type: actionType.SEND_MESSAGE,
    message,
});

const loadData = (data) => ({
    type: actionType.LOAD_GROUPS,
    data,
});

const changeCurrentGroup = (otherGroupId) => ({
    type: actionType.CHANGE_CURRENT_GROUP,
    otherGroupId,
});
export { loadData, sendMessage, changeCurrentGroup };
