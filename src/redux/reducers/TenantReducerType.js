import { TenantActionTypes } from "../constants/TenantActionTypes";

const initialState ={
    tenants:[]
};

export const getAllTenantsReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case TenantActionTypes.GET_ALL_TENANTS:
            return {...state,tenants:payload}
    
        default:
            return state;
            
    }
};

export const getTenantReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case TenantActionTypes.GET_TENANT:
            return {...state,...payload}
            
        case TenantActionTypes.DELETE_TENANT:
            return{}
            
        default:
            return state;
    }
}