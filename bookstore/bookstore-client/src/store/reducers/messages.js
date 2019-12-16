import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

const message = (state = [], action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            return [...action.messages];
        default:
            return state;
    }
};

export default message;
