import { messageActions } from './message-actions';
import { handleFetchResponse, fetchWithTimeout } from '../../../../../services/root-service';
const messageService = {};

messageService.getMessages = (userId) => async (dispatch) => {
    dispatch(messageActions.loadMessages());

    const url = `http://localhost:8080/api/message/user/${userId}`;
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    fetchWithTimeout(url, options)
        .then((res) => handleFetchResponse(res))
        .then((messages) => dispatch(messageActions.loadMessagesSuccess(messages)))
        .catch((err) => dispatch(messageActions.loadMessagesError(err)));
};

export { messageService };
