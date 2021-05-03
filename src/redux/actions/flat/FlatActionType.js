import {ActionType} from './ActionType';

export const getFlats = (flats) =>{
    return {
        type: ActionType.GET_ALL_FLATS,
        payload:flats
    }
}

export const getFlatById = (flat) =>{
    return{
        type: ActionType.GET_FLAT_BY_ID,
        payload: flat
    }
}

export const deleteFlatById = () =>{
    return {
        type: ActionType.DELETE_FLAT_BY_ID
    }
}