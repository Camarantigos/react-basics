import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import books from "./books";

const rootReducer = combineReducers({
    currentUser,
    errors,
    messages,
    books,
});

export default rootReducer;
