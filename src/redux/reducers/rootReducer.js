import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";
import UserReducer from "./UsersReducer";
import { getAllUsersReducer, getUserReducer } from "./UserReducerType";

const rootReducer = combineReducers({
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,

    UserReducer,
    allUsers : getAllUsersReducer,
    user : getUserReducer,

});

export default rootReducer;