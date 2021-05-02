import { UserActionTypes } from "../constants/UserActionTypes"

const initialState = {
    users:[],
    user:[],
    isAdded:false,
    isUpdated:false
};

export const userReducer = (state = initialState, action) => {
    switch (type) {
        
        case UserActionTypes.ADD_USER :
            return {...state, newuser:action.payload, isAdded:true}

        case UserActionTypes.UPDATE_USER :
            return {...state, users:action.payload, isUpdated:true}

        case UserActionTypes.DELETE_USER :
            return {...state, users:action.users}

        case UserActionTypes.GET_USERS :
            return {...state, users:action.users}

        case UserActionTypes.GET_ALL_USERS :
            return {...state, users:action.users}

        default : 
            return state;

    }
}