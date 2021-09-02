import { initialState } from '../../../services/main-services';
import { groupActions } from '../services/group-actions';

function groupReducer(state = initialState, action) {
    switch (action.type) {
        case groupActions.actionType.LOADING_START: {
            return {
                ...state,
                isGroupsLoading: true,
            };
        }
        //load success
        case groupActions.actionType.LOADING_SUCCESS: {
            return {
                ...state,
                groups: action.groups,
                isGroupsLoading: false,
            };
        }
        //load error
        case groupActions.actionType.LOADING_ERROR: {
            return {
                ...state,
                error: action.error,
                isGroupsLoading: false,
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
