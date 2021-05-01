import { TenantActionTypes } from '../constants/TenantActionTypes'

export const addTenant = (tenant) => {
    return {
        type : TenantActionTypes.ADD_TENANT,
        payload : tenant
    }
}

export const updateTenant = (tenant) => {
    return {
        type : TenantActionTypes.UPDATE_TENANT,
        payload : tenant
    }
}

export const deleteTenant = () => {
    return {
        type : TenantActionTypes.DELETE_TENANT
    }
}

export const getTenant = () => {
    return {
        type : TenantActionTypes.GET_TENANT
    }
}

export const getAllTenants = () => {
    return {
        type : TenantActionTypes.GET_ALL_TENANTS
    }
}