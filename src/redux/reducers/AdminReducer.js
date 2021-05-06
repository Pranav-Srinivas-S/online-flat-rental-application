import { AdminActionTypes } from '../constants/AdminActionTypes';
const adminReducerDefaultState = [];

const adminReducer = (state = adminReducerDefaultState, action) => {
    switch (action.type) {
        case AdminActionTypes.ADD_ADMIN:
            return [
                ...state,
                action.admin
            ];
        case AdminActionTypes.DELETE_ADMIN:
            return state.filter(({ adminId }) => adminId !== action.adminId);

        case AdminActionTypes.UPDATE_ADMIN:
            return [
                ...state,
                action.admin
            ];

        case AdminActionTypes.GET_ALL_ADMINS:
            return [
                ...state,
                action.admin
            ];
        default:
            return state;
        
    }
}



export default adminReducer;