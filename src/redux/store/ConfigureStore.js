import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const store = () => {
    return createStore(
        rootReducer, applyMiddleware(thunk)
    );
};

export default store;

