import { initialState } from '../../../services/main-services';
import { groupActions } from '../services/group-actions';
import { messageActions } from '../../Messenger/services/message-actions';

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

        case groupActions.actionType.CREATE_GROUP_START: {
            return {
                ...state,
                createGroupLoading: true,
            };
        }

        case groupActions.actionType.CREATE_GROUP_SUCCESS: {
            const { group } = action;

            return { ...state, groups: [...state.groups, group], createGroupLoading: false };
        }

        case groupActions.actionType.CREATE_GROUP_ERROR: {
            return {
                ...state,
                error: action.error,
                createGroupLoading: false,
            };
        }

        case groupActions.actionType.LOAD_LAST_MESSAGE: {
            return {
                ...state,
            };
        }
        //load success
        case groupActions.actionType.LOAD_LAST_MESSAGE_SUCCESS: {
            return {
                ...state,
                groups: action.groups,
                isGroupsLoading: false,
            };
        }
        //load error
        case groupActions.actionType.LOAD_LAST_MESSAGE_ERROR: {
            return {
                ...state,
                error: action.error,
                isGroupsLoading: false,
            };
        }

        case messageActions.actionType.UPDATE_MESSAGES: {
            const { message } = action;

            const newGroups = state.groups.map((gr) => {
                if (gr._id === message.groupId) {
                    gr.lastMessage = message._id;
                } //server return msg without id,need it to update last message
            });

            return { ...state, groups: [...state.groups, newGroups] };
        }

        default:
            return { ...state };
    }
}
export default groupReducer;
