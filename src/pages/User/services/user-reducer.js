import { createStore } from 'redux';
import { initialState } from './user-services';
const userActions = {};
userActions.actionsType = {
  CHANGE_DATA: 'CHANGE DATA',
};
//userActions.
function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.actionsType.CHANGE_DATA:
      return action.data;
    default:
      return state;
  }
}

export const userStore = createStore(userReducer);
