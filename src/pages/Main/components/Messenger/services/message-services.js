import { messageActions } from './message-actions';
import { handleFetchResponse } from '../../../../../services/root-service';
const messageService = {};

messageService.getMessages = (userId) => async (dispatch) => {
    dispatch(messageActions.loadMessages());
    fetch(`http://localhost:8080/api/message/user/${userId}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((res) => handleFetchResponse(res))
        .then((messages) => dispatch(messageActions.loadMessagesSuccess(messages)))
        .catch((err) => dispatch(messageActions.loadMessagesError(err)));
};

export { messageService };
