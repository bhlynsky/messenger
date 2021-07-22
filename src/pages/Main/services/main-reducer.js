import { initialState } from './main-services';
import { actionType } from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD_GROUPS: {
            let defaultGroup = state.currentGroup;
            const groups = action.data;

            // not understand this actions below
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
            //NOTE You can use destructuring here  const newMessage = action.message;
            //const {message} = action;
            const newMessage = action.message;

            //NOTE Here you not make new copy of object you just copy reference of previous object
            //Better made copy with Object.assign or destructuring {... state.currentGroup}
            // const updatedGroup = state.currentGroup;
            // updatedGroup.messages = [...state.currentGroup.messages, newMessage];
            //did this because prev version was mutating state and
            //therefore mapStateToProps didnt trigger component update
            //when message was added

            //// Q:Any simpler way to do this?

            //and also one thing: sidebar does not updates immediately when message was sent,
            //leave it for now or fix it?

            //NOTE look at approach below. That the better way, update the object and inside you update the messages
            // But you should also update groups object
            // my suggestion for you made different store for groups and messages
            return {
                ...state,
                currentGroup: {
                    ...state.currentGroup,
                    messages: [...state.currentGroup.messages, newMessage]
                },
            };
        }
        default:
            return state;
    }
}
export default mainReducer;
