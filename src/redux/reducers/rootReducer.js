import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";
import flatReducer from "./flat/FlatReducer";
import { getAllFlatsReducer, getFlatReducer} from "./flat/FlatReducerType";

const rootReducer = combineReducers({
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,

    flatReducer,
    allFlats: getAllFlatsReducer,
    flat: getFlatReducer,



});

export default rootReducer;