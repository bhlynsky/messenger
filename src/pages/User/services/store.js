import { createStore } from 'redux';
import { initialState } from './user-services';

function userReducer(state = initialState, action) {
  switch (action.type) {
    //actions
    case 'CHANGE_DATA':
      return action.data;
    default:
      return state;
  }
}

export const userStore = createStore(userReducer);
