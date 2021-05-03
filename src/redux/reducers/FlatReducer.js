import { FlatActionTypes } from "../constants/FlatActionTypes"

const initialState = {
    flats:[],
    flat:[],
    isAdded:false,
    isUpdated:false
};

export const flatReducer = (state = initialState, action) => {
    switch (type) {
        
        case FlatActionTypes.ADD_FLAT :
            return {...state, newflat:action.payload, isAdded:true}

        case FlatActionTypes.UPDATE_FLAT :
            return {...state, flats:action.payload, isUpdated:true}

        case FlatActionTypes.DELETE_FLAT :
            return {...state, flats:action.flats}

        case FlatActionTypes.GET_FLAT :
            return {...state, flat:action.flats}

        case FlatActionTypes.GET_ALL_FLATS :
            return {...state, flats:action.flats}

        case FlatActionTypes.GET_FLATS_BY_COST:
            return {...state, flats:action.flats}

        default : 
            return state;

    }
}