import { actionType } from './message-constants';

const sendMessage = (newMessages, newGroups, message) => ({
    type: actionType.SEND_MESSAGE,
    newMessages,
    newGroups,
    message,
});

const loadMessageData = (data) => ({
    type: actionType.LOAD_MESSAGES,
    data,
});

export { loadMessageData, sendMessage };
