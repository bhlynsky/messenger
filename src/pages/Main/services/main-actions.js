import actionType from './main-constants';

const sendMessage = (message) => ({
    type: actionType.SEND_MESSAGE,
    message,
});

const loadData = (data) => ({
    type: actionType.LOAD,
    data,
});
export { loadData, sendMessage };
