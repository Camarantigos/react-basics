import rootReducer from "./reducers";
import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import thunk from "redux-thunk";

export function configureStore() {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtention ? window.devToolsExtention() : f => f));
    return store;
}