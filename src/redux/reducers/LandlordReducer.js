import { LandlordActionTypes } from "../constants/LandlordActionTypes"

const landlordReducerDefaultState = [];

const landlordReducer = (state = landlordReducerDefaultState, action) => {
    switch (action.type) {
        case LandlordActionTypes.ADD_LANDLORD:
            return [
                ...state,
                action.landlord
            ];

        case LandlordActionTypes.DELETE_LANDLORD:
            return state.filter(({ landlordId }) => landlordId !== action.landlordId);

        case LandlordActionTypes.UPDATE_LANDLORD:
            return [
                ...state,
                action.landlord
            ];

        case LandlordActionTypes.GET_ALL_LANDLORDS:
            return [
                ...state,
                action.landlord
            ]
        default:
            return state;
    }
}

export default landlordReducer;
