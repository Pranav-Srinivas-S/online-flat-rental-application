import { TenantActionTypes } from '../constants/TenantActionTypes'
import Axios from 'axios';
import { useDispatch } from 'react-redux';

const apiUrl = 'http://localhost:9191/api/ofr';

const dispatch = useDispatch();

export const addTenantSuccess = (tenant) => {
    return {
        type : TenantActionTypes.ADD_TENANT,
        payload : tenant
    }
};

export const addTenant = (payload) => {
    let data = {
        tenantId : payload.tenantId,
        tenantName : payload.tenantName,
        tenantAge : payload.tenantAge,
        houseNo : payload.houseNo,
        street : payload.street,
        city : payload.city,
        state : payload.state,
        pin : payload.pin,
        country : payload.country
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/tenant/add-tenant", data)
            .then(response => {
                dispatch(addTenantSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const updateTenantSuccess = (tenant) => {
    return {
        type : TenantActionTypes.UPDATE_TENANT,
        payload : tenant
    }
};

export const updateTenant = (payload, tenantId) => {
    let data = {
        tenantId : payload.tenantId,
        tenantName : payload.tenantName,
        tenantAge : payload.tenantAge,
        houseNo : payload.houseNo,
        street : payload.street,
        city : payload.city,
        state : payload.state,
        pin : payload.pin,
        country : payload.country
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/tenant/update-tenant/" + tenantId, data)
            .then(response => {
                dispatch(updateTenantSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const deleteTenantSuccess = (tenant) => {
    return {
        type : TenantActionTypes.DELETE_TENANT,
        payload : tenant
    }
};

export const deleteProduct = (tenantId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + "/tenant/delete-tenant/"+tenantId)
            .then(respose => {
                dispatch(deleteTenantSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getTenantSuccess = (tenant) => {
    return {
        type : TenantActionTypes.GET_TENANT,
        payload : tenant
    }
};

export const getTenant = (tenantId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + "/tenant/view-tenant/" + tenantId)
            .then(response => {
                dispatch(getTenantSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getAllTenantsSuccess = (tenants) => {
    return {
        type : TenantActionTypes.GET_ALL_TENANTS,
        payload : tenants
    }
};

export const getAllTenants = () => {
    return(dispatch) => {
        return Axios.get(apiUrl + "/tenant/view-all-tenants/")
            .then(respose => {
                dispatch(getAllTenantsSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};