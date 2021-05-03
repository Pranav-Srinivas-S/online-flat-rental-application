import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";

const rootReducer = combineReducers({
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,
});

export default rootReducer;