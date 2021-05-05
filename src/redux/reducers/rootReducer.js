import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";
import LoginReducer from "./LoginReducer";

const rootReducer = combineReducers({
    LoginReducer,
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,
});

export default rootReducer;