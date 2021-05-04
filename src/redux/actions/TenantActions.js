import { TenantActionTypes } from '../constants/TenantActionTypes'
import axios from '../../axios/Axios';

const addTenantSuccess = (tenant) => ({
    type: TenantActionTypes.ADD_TENANT,
    tenant
});

export const addTenant = (tenantData = {
    tenantName: '',
    tenantAge: '',
    houseNo: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    country: ''
}) => {
    return (dispatch) => {
        const tenant = {
            tenantName: tenantData.tenantName,
            tenantAge: tenantData.tenantAge,
            tenantAddress: {
                houseNo: tenantData.houseNo,
                street: tenantData.street,
                city: tenantData.city,
                state: tenantData.state,
                pin: tenantData.pin,
                country: tenantData.country
            }
        };
        console.log(tenant);
        return axios.post('/add-tenant', tenant)
            .then(() => {
                dispatch(addTenantSuccess(tenant));
            })
            .catch(error => {
                throw (error);
            });
    };
};

const updateTenantSuccess = (updatedTenant) => ({
    type: TenantActionTypes.UPDATE_TENANT,
    updatedTenant
});

export const updateTenant = (updatedTenant = {
    tenantId: '',
    tenantName: '',
    tenantAge: '',
    houseNo: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    country: ''
}) => {
    return (dispatch) => {
        const tenant = {
            tenantId: updatedTenant.tenantId,
            tenantName: updatedTenant.tenantName,
            tenantAge: updatedTenant.tenantAge,
            tenantAddress: {
                houseNo: updatedTenant.houseNo,
                street: updatedTenant.street,
                city: updatedTenant.city,
                state: updatedTenant.state,
                pin: updatedTenant.pin,
                country: updatedTenant.country
            }
        };
        console.log(tenant);
        return axios.put(`/update-tenant`, tenant)
            .then(() => {
                dispatch(updateTenantSuccess(tenant));
            })
            .catch(error => {
                throw (error);
            });
    }
};

const deleteTenantSuccess = ({ tenantId } = {}) => ({
    type: TenantActionTypes.DELETE_TENANT,
    tenantId
});

export const deleteTenant = ({ tenantId } = {}) => {
    return (dispatch) => {
        return axios.delete(`/delete-tenant/${tenantId}`)
            .then(() => {
                dispatch(deleteTenantSuccess({ tenantId }));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getTenantSuccess = (tenant) => {
    return {
        type: TenantActionTypes.GET_TENANT,
        payload: tenant
    }
};

export const getTenant = (tenantId) => {
    return (dispatch) => {
        return axios.get(`/view-tenant/${tenantId}`)
            .then(response => {
                dispatch(getTenantSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getAllTenants = (tenants) => {
    return {
        type: TenantActionTypes.GET_ALL_TENANTS,
        payload: tenants
    }
};
