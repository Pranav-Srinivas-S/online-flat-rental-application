import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";
import UserReducer from "./UsersReducer";
import { getAllUsersReducer, getUserReducer } from "./UserReducerType";
import LandlordReducer from "./LandlordReducer";
import { getAllLandlordsReducer, getLandlordReducer } from "./LandlordReducerType";

const rootReducer = combineReducers({
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,

    UserReducer,
    allUsers : getAllUsersReducer,
    user : getUserReducer,

    LandlordReducer,
    allLandlords : getAllLandlordsReducer,
    landlord : getLandlordReducer,

});

export default rootReducer;