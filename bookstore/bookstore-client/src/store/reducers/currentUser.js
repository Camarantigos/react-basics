import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    isAuthentecated: false, //turns true when the user is logged in
    user: {}, //user info when isAuthenticated turns true
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                // object if empty turn to false unsless we have keys
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user,
            };
        default:
            return state;
    }
};
