import { LandlordActionTypes } from "../constants/LandlordActionTypes"

const initialState = {
    landlords:[],
    landlord:[],
    isAdded:false,
    isUpdated:false
};

export const landlordReducer = (state = initialState, action) => {
    switch (type) {
        
        case LandlordActionTypes.ADD_LANDLORD :
            return {...state, newlandlord:action.payload, isAdded:true}

        case LandlordActionTypes.UPDATE_LANDLORD :
            return {...state, landlords:action.payload, isUpdated:true}

        case LandlordActionTypes.DELETE_LANDLORD :
            return {...state, landlords:action.landlords}

        case LandlordActionTypes.GET_LANDLORD :
            return {...state, landlord:action.landlords}

        case LandlordActionTypes.GET_ALL_LANDLORDS :
            return {...state, landlords:action.landlords}

        default : 
            return state;

    }
}