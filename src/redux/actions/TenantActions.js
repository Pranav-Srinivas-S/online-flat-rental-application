import { TenantActionTypes } from '../constants/TenantActionTypes'
import axios from '../../axios/Axios';

/************************************************************************************
   * Function: addTenantSuccess 
   * Description: Action for Tenant Module Add Service.
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

const addTenantSuccess = (tenant) => ({
    type: TenantActionTypes.ADD_TENANT,
    tenant
});

/************************************************************************************
   * Function: addTenant
   * Description: Service for addTenantSuccess Action
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

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

/************************************************************************************
   * Function: updateTenantSuccess 
   * Description: Action for Tenant Module Update Service.
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

const updateTenantSuccess = (tenant) => ({
    type: TenantActionTypes.UPDATE_TENANT,
    tenant
});

/************************************************************************************
   * Function: updateTenant
   * Description: Service for updateTenantSuccess Action
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

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
        return axios.put('/update-tenant', tenant)
            .then(() => {
                dispatch(updateTenantSuccess(tenant));
            })
            .catch(error => {
                throw (error);
            });
    }
};

/************************************************************************************
   * Function: deleteTenantSuccess 
   * Description: Action for Tenant Module Delete Service.
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

const deleteTenantSuccess = ({ tenantId } = {}) => ({
    type: TenantActionTypes.DELETE_TENANT,
    tenantId
});

/************************************************************************************
   * Function: deleteTenant
   * Description: Service for deleteTenantSuccess Action
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

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

/************************************************************************************
   * Function: getTenantSuccess 
   * Description: Action for Tenant Module Get Service.
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const getTenantSuccess = (tenant) => {
    return {
        type: TenantActionTypes.GET_TENANT,
        payload: tenant
    }
};

/************************************************************************************
   * Function: getTenant
   * Description: Service for getTenantSuccess Action
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

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

/************************************************************************************
   * Function: getAllTenant 
   * Description: Action for Tenant Module Get All Service.
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const getAllTenants = (tenants) => {
    return {
        type: TenantActionTypes.GET_ALL_TENANTS,
        payload: tenants
    }
};