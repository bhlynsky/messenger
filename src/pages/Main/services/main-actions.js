import { actionType } from './main-constants';

const sendMessage = (message) => ({
    type: actionType.SEND_MESSAGE,
    message,
});
