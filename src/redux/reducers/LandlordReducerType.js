import { LandlordActionTypes } from "../constants/LandlordActionTypes";

const initialState ={
    landlords:[]
};

export const getAllLandlordsReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case LandlordActionTypes.GET_ALL_LANDLORDS:
            return {...state,landlords:payload}
    
        default:
            return state;
            
    }
};

export const getLandlordReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case LandlordActionTypes.GET_LANDLORD:
            return {...state,...payload}
            
        case LandlordActionTypes.DELETE_LANDLORD:
            return{}
            
        default:
            return state;
    }
}