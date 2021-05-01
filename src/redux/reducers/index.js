import { combineReducers } from "redux";
import { tenantReducer } from "./TenantReducer";

const reducers = combineReducers({
    allTenants : tenantReducer
});

export default reducers;