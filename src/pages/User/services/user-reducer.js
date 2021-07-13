import { createStore } from 'redux';
import userActions from './user-actions';
import { initialState } from './user-services';

function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActions.actionsType.CHANGE_DATA:

    //{...user} === Object.assign({}, user)
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
}

export const userStore = createStore(userReducer);
