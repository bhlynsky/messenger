import { actionType } from './main-constants';

const sendMessage = (message) => ({
    type: actionType.SEND_MESSAGE,
    message,
});

const loadData = (data) => ({
    type: actionType.LOAD_GROUPS,
    data,
});

const changeCurrentGroup = (id, name) => ({
    type: actionType.CHANGE_CURRENT_GROUP,
    data: { id, groupName: name },
});
export { loadData, sendMessage, changeCurrentGroup };
