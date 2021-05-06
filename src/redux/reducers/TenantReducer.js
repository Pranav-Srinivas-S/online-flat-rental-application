import { TenantActionTypes } from "../constants/TenantActionTypes"

/************************************************************************************
   * Function: TenantReducer
   * Description: Reducer for Tenant Module Services.
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

const tenantReducerDefaultState = [];

const tenantReducer = (state = tenantReducerDefaultState, action) => {
    switch (action.type) {
        case TenantActionTypes.ADD_TENANT:
            return [
                ...state,
                action.tenant
            ];

        case TenantActionTypes.DELETE_TENANT:
            return state.filter(({ tenantId }) => tenantId !== action.tenantId);

        case TenantActionTypes.UPDATE_TENANT:
            return [
                ...state,
                action.tenant
            ];

        case TenantActionTypes.GET_ALL_TENANTS:
            return [
                ...state,
                action.tenant
            ]
            
        default:
            return state;
    }
}

export default tenantReducer;
