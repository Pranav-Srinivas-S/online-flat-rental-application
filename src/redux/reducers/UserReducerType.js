import { UserActionTypes } from "../constants/UsersActionTypes";

/************************************************************************************
   * Function: UserReducer
   * Description: Reducer for User Module Services.
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/
const initialState = {
    users: []
};

export const getAllUsersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UserActionTypes.GET_ALL_USERS:
            return { ...state, users: payload }

        default:
            return state;

    }
};

export const getUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UserActionTypes.GET_USER:
            return { ...state, ...payload }

        case UserActionTypes.DELETE_USER:
            return {}

        default:
            return state;
    }
}
