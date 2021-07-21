import { initialState } from './main-services';
import actionType from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS:
            // TODO if you want setup default currentUserGroup you can do it here , just be sure that action.data.length > 0
            return {
                ...state,
                groups: action.data,
                //currentGroup: {id: action.data[0].id, groupName: action.data[0].groupName}
            };
        case actionType.CHANGE_CURRENT_GROUP:
            return {
                ...state,
                currentGroupId: action.otherGroupId,
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
