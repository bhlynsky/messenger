import { initialState } from './main-services';
import actionType from './main-constants';

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOAD:
            return {
                ...state,
                groups: action.data,
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
