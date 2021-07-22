import { initialState } from './main-services';
import { actionType } from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS:
            let defaultGroup = state.currentGroup;
            const groups = action.data;

            if (groups.length > 0 && defaultGroup.id === 0) {
                defaultGroup = { id: groups[0].id, groupName: groups[0].groupName };
            }

            return {
                ...state,
                groups,
                currentGroup: defaultGroup,
            };

        case actionType.CHANGE_CURRENT_GROUP:
            return {
                ...state,
                currentGroup: action.data,
            };

        case actionType.SEND_MESSAGE:
            return {
                ...state,
                // add message to array / object where other messages stored
            };
        default:
            return state;
    }
}
export default mainReducer;
