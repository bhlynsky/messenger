import { createStore } from 'redux';
import { initialState } from './main-services';
import actionType from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SEND_MESSAGE:
            return {
                ...state.messages,
                message, // add message to array / object where other messages stored
            };
        default:
            return state;
    }
}
export const mainStore = createStore(mainReducer);
