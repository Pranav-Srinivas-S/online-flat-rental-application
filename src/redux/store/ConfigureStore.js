import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

/************************************************************************************
   * Function: store
   * Description: It is the Store to save all states.
   * Created Date:  04-05-2021 
 ************************************************************************************/

const store = () => {
    return createStore(
        rootReducer, applyMiddleware(thunk)
    );
};

export default store;

