import actionType from './main-constants';

const sendMessage = (payload) => ({
    type: actionType.SEND_MESSAGE,
    payload,
});

const loadData = (data) => ({
    type: actionType.LOAD,
    data,
});
export { loadData, sendMessage };
