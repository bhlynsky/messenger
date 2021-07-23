import { initialState } from './main-services';
import { actionType } from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS: {
            let defaultGroup = state.currentGroup;
            const groups = action.data;

            // not understand this actions below
            if (groups.length > 0 && typeof defaultGroup.id === 'undefined') {
                defaultGroup = groups[0];
            }

            return {
                ...state,
                groups,
                currentGroup: defaultGroup,
            };
        }

        case actionType.CHANGE_CURRENT_GROUP:
            return {
                ...state,
                currentGroup: action.group,
            };

        case actionType.SEND_MESSAGE: {
            const { message } = action;

            //NOTE look at approach below. That the better way, update the object and inside you update the messages
            // But you should also update groups object
            // my suggestion for you made different store for groups and messages
            return {
                ...state,
                currentGroup: {
                    ...state.currentGroup,
                    messages: [...state.currentGroup.messages, message],
                },
            };
        }
        default:
            return state;
    }
}
export default mainReducer;
