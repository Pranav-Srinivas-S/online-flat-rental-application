import { TenantActionTypes } from "../constants/TenantActionTypes"

const initialState = {
    tenants:[],
    tenant:[],
    selectedTenant:[],
    isUpdated:undefined
};

export const tenantReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        
        case TenantActionTypes.ADD_TENANT :
            return {...state, newtenant:payload}

        case TenantActionTypes.UPDATE_TENANT :
            return {...state, tenants:payload, isUpdated:true}

        case TenantActionTypes.DELETE_TENANT :
            return {...state, tenants:payload}

        case TenantActionTypes.GET_TENANT :
            return {...state, selectedTenant:payload}

        case TenantActionTypes.GET_ALL_TENANTS :
            return {...state, tenants:payload}

        default : 
            return state;

    }
}