import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";
import UserReducer from "./UserReducer";
import { getAllUsersReducer, getUserReducer } from "./USerReducerType";

const rootReducer = combineReducers({
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,

    UserReducer,
    allUsers : getAllUsersReducer,
    user : getUserReducer,
});



export default rootReducer;