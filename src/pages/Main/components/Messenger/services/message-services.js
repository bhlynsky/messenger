import { messageActions } from './message-actions';

const messageService = {};

const handleResponse = (response) => {
    return response.json().then((json) => {
        if (!response.ok) {
            const error = { ...json, status: response.status, statusText: response.statusText };

            return Promise.reject(error.message);
        }
        return json;
    });
};

messageService.getMessages = (userId) => async (dispatch) => {
    dispatch(messageActions.loadMessages());
    try {
        const response = await fetch(`http://localhost:8080/api/message/user/${userId}`);

        if (!response.ok) throw new Error(response.statusText);

        const messages = await response.json();
        dispatch(messageActions.loadMessagesSuccess(messages));
    } catch (err) {
        dispatch(messageActions.loadMessagesError(err));
    }
};

export { messageService };
