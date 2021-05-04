import { TenantActionTypes } from "../constants/TenantActionTypes"

// const initialState = {
//     tenants:[],
//     tenant:[],
//     isAdded:false,
//     isUpdated:false
// };

const tenantReducerDefaultState = [];

const tenantReducer = (state = tenantReducerDefaultState, action) => {
    switch (action.type) {
        case TenantActionTypes.ADD_TENANT:
            return [
                ...state,
                action.tenant
            ];
            
        case TenantActionTypes.DELETE_TENANT:
            return state.filter(({tenantId}) => tenantId !== action.tenantId);

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

// export default function TenantReducer(state=[], action) {
//     switch (action.type) {
        
//         case TenantActionTypes.ADD_TENANT :
//             //return {...state, newtenant:action.payload, isAdded:true}
//             return [
//                 ...state,
//                 action.payload
//             ]

//         case TenantActionTypes.UPDATE_TENANT :
//             //return {...state, tenants:action.payload, isUpdated:true}
//             return [
//                 ...state,
//                 action.payload
//             ]

//         case TenantActionTypes.DELETE_TENANT :
//             //return {...state, tenants:action.tenants}
//             return action.payload;

//         case TenantActionTypes.GET_TENANT :
//             //return {...state, tenant:action.tenants}
//             return action.payload;

//         case TenantActionTypes.GET_ALL_TENANTS :
//             //return {...state, tenants:action.tenants}
//             console.log(action.tenants);
//             return action.payload;

//         default : 
//             return state;

//     }
// }

//export default tenantReducer;