import { FlatBookingActionTypes } from "../constants/FlatBookingActionTypes";

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