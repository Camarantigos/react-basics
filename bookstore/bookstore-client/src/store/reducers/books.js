import { LOAD_BOOKS, REMOVE_BOOK } from "../actionTypes";

const book = (state = [], action) => {
    switch (action.type) {
        case LOAD_BOOKS:
            return [...action.books];
        case REMOVE_BOOK:
            return state.filter(book => book._id !== action.id);
        default:
            return state;
    }
};

export default book;
