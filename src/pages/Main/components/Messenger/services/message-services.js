import { messageActions } from './message-actions';

const messageService = {};

const handleResponse = (response) => {
    return response.json().then((json) => {
        console.log(response);
        if (!response.ok) {
            const error = { ...json, status: response.status, statusText: response.statusText };

            return Promise.reject(error.message);
        }
        return json;
    });
};

messageService.sendNewMessage = (body) => (dispatch) => {
    dispatch(messageActions.sendMessageStart());

    fetch('http://localhost:8080/api/message/new', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((res) => handleResponse(res))
        .then((message) => dispatch(messageActions.sendMessageSuccess(message)))
        .catch((err) => dispatch(messageActions.sendMessageError(err)));
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
