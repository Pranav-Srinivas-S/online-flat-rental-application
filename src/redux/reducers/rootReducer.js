import { combineReducers } from "redux";
import TenantReducer from "./TenantReducer";
import { getAllTenantsReducer, getTenantReducer } from "./TenantReducerType";
import flatReducer from "./flat/FlatReducer";
import { getAllFlatsReducer, getFlatReducer, getFlatsByCostReducer} from "./flat/FlatReducerType";
import UserReducer from "./UsersReducer";
import { getAllUsersReducer, getUserReducer } from "./UserReducerType";
import LandlordReducer from "./LandlordReducer";
import { getAllLandlordsReducer, getLandlordReducer } from "./LandlordReducerType";
import AdminReducer from "./AdminReducer";
import { getAllAdminsReducer, getAdminReducer } from "./AdminReducerType";
import FlatBookingReducer from './FlatBookingReducer';
import { getAllFlatBookingsReducer, getFlatBookingReducer  } from './FlatBookingReducerType';

/************************************************************************************
   * Component: RootReducer
   * Description: It is used to combine all modules Reducers.
   * Created Date:  04-05-2021 
 ************************************************************************************/

const rootReducer = combineReducers({
    TenantReducer,
    allTenants : getAllTenantsReducer,
    tenant : getTenantReducer,

    flatReducer,
    allFlats: getAllFlatsReducer,
    flat: getFlatReducer,
    flatsByCost:getFlatsByCostReducer,

    UserReducer,
    allUsers : getAllUsersReducer,
    user : getUserReducer,

    LandlordReducer,
    allLandlords : getAllLandlordsReducer,
    landlord : getLandlordReducer,

    AdminReducer,
    allAdmins : getAllAdminsReducer,
    admin : getAdminReducer,


    FlatBookingReducer,
    allFlatBookings : getAllFlatBookingsReducer,
    flatBooking : getFlatBookingReducer,

});

export default rootReducer;