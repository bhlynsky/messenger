import { messageActions } from './message-actions';

const updateValuesOnSendMessage = (messages, groups, newMessage, groupId) => {
    const newMessages = JSON.parse(JSON.stringify(messages));
    const newGroups = JSON.parse(JSON.stringify(groups));

    const indexMsg = newMessages.findIndex((msg) => msg.groupId === groupId);
    const indexGroup = newGroups.findIndex((gr) => gr.id === groupId);

    if (indexMsg === -1) {
        newMessages.push({ groupId, messages: [newMessage] });
    } else {
        newMessages[indexMsg].messages.push(newMessage);
    }

    newGroups[indexGroup].lastMessage = newMessage; // update last message

    localStorage.setItem('messageData', JSON.stringify(newMessages)); // update messages
    localStorage.setItem('groupData', JSON.stringify(newGroups)); //update group

    return { newMessages, newGroups };
};

const createNewMessage = async (body) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/message/new',

            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
        );
        //hadle errors
        if (!response.ok) throw new Error(response.statusText);

        const message = await response.json();

        return message;
    } catch (err) {
        console.error(err);
    }
};

const getMessages = (userId) => async (dispatch) => {
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

export { updateValuesOnSendMessage, createNewMessage, getMessages };
