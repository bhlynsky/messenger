import { initialState } from '../../../services/main-services';
import { actionType } from '../../../services/main-constants';

function sidebarReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS: {
            // load groups for sidebar and also load message for default group
            // let defaultGroup = state.currentGroup;
            const groups = action.data;

            //if (groups.length > 0 && typeof defaultGroup.id === 'undefined') {
            //    defaultGroup.groupName = groups[0].groupName;
            //}

            return {
                ...state,
                groups,
                currentGroup: { id: groups[0].id },
            };
        }

        case actionType.CHANGE_CURRENT_GROUP: {
            // get messages for current group when changing group

            return {
                ...state,
                currentGroup: { id: action.groupId, groupName: action.groupName },
            };
        }
        default:
            return { ...state };
    }
}
export default sidebarReducer;
