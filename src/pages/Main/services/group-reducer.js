import { initialStateGroup } from './main-services';
import { actionType } from './main-constants';

function groupReducer(state = initialStateGroup, action) {
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
                currentGroupName: groups[0].groupName,
            };
        }

        case actionType.CHANGE_CURRENT_GROUP: {
            // get messages for current group when changing group

            return {
                ...state,
                currentGroupName: action.groupName,
            };
        }
        default:
            return { ...state };
    }
}
export default groupReducer;
