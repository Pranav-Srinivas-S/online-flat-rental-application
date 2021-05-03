import { TenantActionTypes } from "../constants/TenantActionTypes"

// const initialState = {
//     tenants:[],
//     tenant:[],
//     isAdded:false,
//     isUpdated:false
// };

export const tenantReducer = (state=[], action) => {
    switch (action.type) {
        
        case TenantActionTypes.ADD_TENANT :
            return {...state, newtenant:action.payload, isAdded:true}

        case TenantActionTypes.UPDATE_TENANT :
            return {...state, tenants:action.payload, isUpdated:true}

        case TenantActionTypes.DELETE_TENANT :
            return {...state, tenants:action.tenants}

        case TenantActionTypes.GET_TENANT :
            return {...state, tenant:action.tenants}

        case TenantActionTypes.GET_ALL_TENANTS :
            //return {...state, tenants:action.tenants}
            console.log(action.tenants);
            return action.tenants;

        default : 
            return state;

    }
}

export default tenantReducer;