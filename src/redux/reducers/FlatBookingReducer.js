import { FlatBookingActionTypes } from "../constants/FlatBookingActionTypes";

/************************************************************************************
   * Function:FlatBookingReducer
   * Description: Reducer for FlatBooking Module Services.
   * Created By: ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/


const flatBookingReducerDefaultState = [];

const flatBookingReducer = (state = flatBookingReducerDefaultState, action) => {
    switch (action.type) {
        case FlatBookingActionTypes.ADD_FLATBOOKING:
            return [
                ...state,
                action.flatBooking
            ];
            
        case FlatBookingActionTypes.DELETE_FlATBOOKING:
            return state.filter(({bookingNo}) => bookingNo!== action.bookingNo);

        case FlatBookingActionTypes.UPDATE_FLATBOOKING:
            return [
                ...state,
                action.flatBooking
            ];

        case FlatBookingActionTypes.GET_ALL_FlATBOOKINGS:
            return [
                ...state,
                action.flatBooking
            ]
        default:
            return state;
    }
}

export default flatBookingReducer;
