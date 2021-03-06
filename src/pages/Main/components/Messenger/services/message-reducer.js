import { initialState } from '../../../services/main-services';
import { messageActions } from '../services/message-actions';

function messageReducer(state = initialState, action) {
    switch (action.type) {
        //load data
        case messageActions.actionType.LOADING_START:
            return {
                ...state,
                isMessagesLoading: true,
            };
        //load success
        case messageActions.actionType.LOADING_SUCCESS:
            return {
                ...state,
                messages: action.messages,
                isMessagesLoading: false,
            };
        //load error
        case messageActions.actionType.LOADING_ERROR: {
            return {
                ...state,
                error: action.error,
                isMessagesLoading: false,
            };
        }

        case messageActions.actionType.CHANGE_CURRENT_GROUP: {
            let { group } = action;
            // get messages for current group when changing group
            const index = state.messages.findIndex((msg) => msg.groupId === group._id);
            let groupMessages = [];

            if (index !== -1) {
                // findIndex returns -1 if index not found(no messages for this group)
                groupMessages = state.messages[index].groupMessages;
            }

            return {
                ...state,
                currentGroup: { group, messages: groupMessages },
            };
        }

        case messageActions.actionType.SEND_MESSAGE_START: {
            return { ...state, sendMessageLoading: true };
        }

        case messageActions.actionType.SEND_MESSAGE_SUCCESS: {
            //const { message } = action;

            return {
                ...state,
                sendMessageLoading: false,
            };
        }

        case messageActions.actionType.SEND_MESSAGE_ERROR: {
            return {
                ...state,
                error: action.error,
                sendMessageLoading: false,
            };
        }

        case messageActions.actionType.UPDATE_MESSAGES: {
            const { message } = action;
            //1 - update current group messages array => state.currentgroup:{...state.currentGroup,messages:[currentGroup.messages,newMessage]}
            //2 - get id , then update state.messages
            let newMessages = state.messages.map((msg) => {
                if (msg.groupId === message.groupId)
                    msg.groupMessages = [...msg.groupMessages, message];
            });

            return {
                ...state,

                //1
                currentGroup: {
                    ...state.currentGroup,
                    messages: [...state.currentGroup.messages, message],
                },

                //2
                messages: [...state.messages, newMessages],
            };
        }

        default:
            return { ...state };
    }
}
export default messageReducer;
