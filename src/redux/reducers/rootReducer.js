import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";
import UserReducer from "./UsersReducer";
import { getAllUsersReducer, getUserReducer } from "./UserReducerType";
import FlatBookingReducer from "./FlatBookingReducer";
import { getAllFlatBookingsReducer, getFlatBookingReducer } from "./FlatBookingReducerType";

const rootReducer = combineReducers({
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,

    UserReducer,
    allUsers : getAllUsersReducer,
    user : getUserReducer,

    FlatBookingReducer,
    allFlatBookings: getAllFlatBookingsReducer,
    flatBooking: getFlatBookingReducer,
    

});

export default rootReducer;