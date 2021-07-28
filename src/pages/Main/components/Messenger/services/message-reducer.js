import { initialState } from '../../../services/main-services';
import { actionType } from '../../../services/main-constants';

function messageReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_MESSAGES: {
            const messages = action.data;
            //const index = 0; messages.findIndex((msg) => msg.groupId === state.currentGroup.id);
            // currentGroup.id === undefined for some reason
            // get current group id from action.id?
            return {
                ...state,
                messages,
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
            const { message, newMessages } = action;

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
