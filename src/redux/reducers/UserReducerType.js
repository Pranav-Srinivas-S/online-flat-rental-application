import { UserActionTypes } from "../constants/UsersActionTypes";

const initialState ={
    users:[]
};

export const getAllUsersReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case UserActionTypes.GET_ALL_USERS:
            return {...state,users:payload}
    
        default:
            return state;
            
    }
};

export const getUserReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case UserActionTypes.GET_USER:
            return {...state,...payload}
            
        case UserActionTypes.DELETE_USER:
            return{}
            
        default:
            return state;
    }
}