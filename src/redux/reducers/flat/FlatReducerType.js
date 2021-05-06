import { FlatActionTypes } from '../../constants/FlatActionTypes';

/************************************************************************************
   * Function: FlatReducer
   * Description: Reducer for Flat Module Services.
   * Created By:AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/

const initialState = {
    flats: []
};

export const getAllFlatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FlatActionTypes.GET_ALL_FLATS:
            return { ...state, flats: payload }

        default:
            return state;
    }
};

export const getFlatReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case FlatActionTypes.GET_FLAT:
            return { ...state, ...payload }
        case FlatActionTypes.DELETE_FLAT:
            return {}

        default:
            return state;

    }
}