import { initialState } from '../../../services/main-services';
import { actionType } from '../../../services/main-constants';

function sidebarReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS: {
            // load groups for sidebar and also load message for default group
            const groups = JSON.parse(localStorage.getItem('groupData'));

            return {
                ...state,
                groups,
                currentGroup: {
                    id: groups[0].id,
                    groupName: groups[0].groupName,
                },
            };
        }

        case actionType.CHANGE_CURRENT_GROUP: {
            // get messages for current group when changing group

            return {
                ...state,
                currentGroup: { id: action.groupId, groupName: action.groupName },
            };
        }

        case actionType.SEND_MESSAGE: {
            const { message } = action;

            const newGroups = JSON.parse(JSON.stringify(state.groups)); // deep copy
            const index = state.groups.findIndex((gr) => gr.id === state.currentGroup.id);
            newGroups[index].lastMessage = message;

            localStorage.setItem('groupData', JSON.stringify(newGroups)); // update group

            return { ...state, groups: newGroups };
        }
        default:
            return { ...state };
    }
}
export default sidebarReducer;
