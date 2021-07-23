import { initialStateMessage } from './main-services';
import { actionType } from './main-constants';

function messageReducer(state = initialStateMessage, action) {
    switch (action.type) {
        case actionType.LOAD_MESSAGES: {
            let messages = action.data;
            //const index = messages.findIndex((msg) => msg.groupId === state.currentGroup.id);

            return {
                ...state,
                messages,
                currentGroup: { id: 1, content: messages[0].messages },
            };
        }
        case actionType.CHANGE_CURRENT_GROUP: {
            let { groupId } = action;
            // get messages for current group when changing group
            const index = state.messages.findIndex((msg) => msg.groupId === groupId);

            return {
                ...state,
                currentGroup: { id: groupId, messages: state.messages[index].messages },
            };
        }
        case actionType.SEND_MESSAGE: {
            const { message, groupId } = action;

            const newMessages = [...state.messages];
            const index = state.messages.findIndex((msg) => msg.groupId === groupId);
            newMessages[index].messages.push(message);
            //NOTE look at approach below. That the better way, update the object and inside you update the messages
            // But you should also update groups object
            // my suggestion for you made different store for groups and messages
            return {
                ...state,
                messages: newMessages,
                currentGroup: {
                    ...state.currentGroup,
                    messages: [...state.currentGroup.messages, message],
                },
            };
        }
        default:
            return { ...state };
    }
}
export default messageReducer;
