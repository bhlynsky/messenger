import { initialState } from './main-services';
import { actionType } from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS:
            let defaultGroup = state.currentGroup;
            const groups = action.data;

            if (groups.length > 0 && defaultGroup.id === 0) {
                defaultGroup = groups[0];
            }

            return {
                ...state,
                groups,
                currentGroup: defaultGroup,
            };

        case actionType.CHANGE_CURRENT_GROUP:
            return {
                ...state,
                currentGroup: action.group,
            };

        case actionType.SEND_MESSAGE:
            let message = action.message;

            state.currentGroup.messages.push(message);

            return {
                ...state,
            };

        default:
            return state;
    }
}
export default mainReducer;
