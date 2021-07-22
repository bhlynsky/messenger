import { initialState } from './main-services';
import { actionType } from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS: {
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
        }

        case actionType.CHANGE_CURRENT_GROUP:
            return {
                ...state,
                currentGroup: action.group,
            };

        case actionType.SEND_MESSAGE: {
            const newMessage = action.message;
            const updatedGroup = state.currentGroup;
            updatedGroup.messages = [...state.currentGroup.messages, newMessage];
            //did this because prev version was mutating state and
            //therefore mapStateToProps didnt trigger component update
            //when message was added

            //// Q:Any simpler way to do this?

            //and also one thing: sidebar does not updates immediately when message was sent,
            //leave it for now or fix it?

            return {
                ...state,
                currentGroup: updatedGroup,
            };
        }
        default:
            return state;
    }
}
export default mainReducer;
