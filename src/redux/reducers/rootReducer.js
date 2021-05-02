import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";

const rootReducer = combineReducers({
    allTenants : TenantReducer
})

export default rootReducer;