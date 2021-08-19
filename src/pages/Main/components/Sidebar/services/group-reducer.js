import { initialState } from '../../../services/main-services';
import { groupActions } from '../services/group-actions';

function groupReducer(state = initialState, action) {
    switch (action.type) {
        case groupActions.actionType.LOAD_GROUPS: {
            // load groups for sidebar and also load message for default group
            const groups = action.data;

            return {
                ...state,
                groups,
                currentGroup: {
                    id: groups[0].id,
                    groupName: groups[0].groupName,
                },
            };
        }
        case groupActions.actionType.CHANGE_CURRENT_GROUP: {
            // get messages for current group when changing group

            return {
                ...state,
                currentGroup: { id: action.groupId, groupName: action.groupName },
            };
        }
        case groupActions.actionType.SEND_MESSAGE: {
            const { newGroups } = action;

            return { ...state, groups: newGroups };
        }
        case groupActions.actionType.CREATE_NEW_GROUP: {
            const { group } = action;
            group.id = Math.random() * 100;

            return { ...state, groups: [...state.groups, group] };
        }

        default:
            return { ...state };
    }
}
export default groupReducer;
