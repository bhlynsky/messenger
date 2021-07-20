import { createStore } from 'redux';
import { initialState } from './main-services';
import actionType from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD:
            return {
                ...state,
                ...action.data,
            };
        case actionType.SEND_MESSAGE:
            let message = action.payload.message;
            let groupName = action.payload.groupName;

            state[groupName].messages.push(message);

            return {
                ...state,
                // add message to array / object where other messages stored
            };
        default:
            return state;
    }
}
export const mainStore = createStore(mainReducer);
