import rootActions from './root-actions';

const initialState = { isDarkTheme: false };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case rootActions.actionType.CHANGE_THEME: {
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme,
            };
        }

        default: {
            return state;
        }
    }
}
export default rootReducer;
