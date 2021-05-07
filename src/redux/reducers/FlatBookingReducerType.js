import { FlatBookingActionTypes } from "../constants/FlatBookingActionTypes";
/************************************************************************************
   * Function:FlatBookingReducer
   * Description: Reducer for FlatBooking Module Services.
   * Created By:ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/

const initialState ={
    flatBookings:[]
};

export const getAllFlatBookingsReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case FlatBookingActionTypes.GET_ALL_FLATBOOKINGS:
            return {...state,flatBookings:payload}
    
        default:
            return state;
            
    }
};

export const getFlatBookingReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case FlatBookingActionTypes.GET_FLATBOOKING:
            return {...state,...payload}
            
        case FlatBookingActionTypes.DELETE_FLATBOOKING:
            return{}
            
        default:
            return state;
    }
}