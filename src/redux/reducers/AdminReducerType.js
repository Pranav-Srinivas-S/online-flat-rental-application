import { AdminActionTypes } from '../constants/AdminActionTypes';
const initialState = {
    admins: []
};

export const getAllAdminsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AdminActionTypes.GET_ALL_ADMINS:
            return { ...state, admins: payload }

        default:
            return state;
    }
};

export const getAdminReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case AdminActionTypes.GET_ADMIN:
            return { ...state, ...payload }
        case AdminActionTypes.DELETE_ADMIN:
            return {}

        default:
            return state;

    }
}