import { actionType } from './main-constants';

const sendMessage = (message) => ({
    type: actionType.SEND_MESSAGE,
    message,
});

const loadData = (data) => ({
    type: actionType.LOAD_GROUPS,
    data,
});

const changeCurrentGroup = (group) => ({
    type: actionType.CHANGE_CURRENT_GROUP,
    group,
});

export { loadData, sendMessage, changeCurrentGroup };
