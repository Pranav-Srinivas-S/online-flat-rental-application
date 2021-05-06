import axios from '../../axios/Axios';
import { AdminActionTypes } from '../constants/AdminActionTypes';

const _addAdmin = (admin) => ({

    type: AdminActionTypes.ADD_ADMIN,
    admin

});

export const addAdmin = (adminData = {
    adminPassword: "",
    
}) => {
    return (dispatch) => {
        const admin = {
            adminPassword: adminData.adminPassword,
         
        };
        console.log(admin);
        return axios.post(`/add-admin`, admin)
            .then(() => {
                dispatch(_addAdmin(admin));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const _updateAdmin = (admin) => ({
    type: AdminActionTypes.UPDATE_ADMIN,
    admin
});
export const updateAdmin = (updatedAdmin = {
    adminId: '',
    adminPassword: '',
   
}) => {
    return (dispatch) => {
        const admin = {
            adminId: updatedAdmin.adminId,
            adminPassword: updatedAdmin.adminPassword,
           
        };
        console.log(admin);
        return axios.put(`/update-admin`, admin).then(() => {
            dispatch(_updateAdmin(admin));
        }).catch(error => {
            throw (error);
        });
    }
};

export const _deleteAdmin = ({ adminId } = {}) => ({
    type: AdminActionTypes.DELETE_ADMIN,
    adminId
});

export const deleteAdmin = ({ adminId } = {}) => {
    return (dispatch) => {
        return axios.delete('/delete-admin/${adminId}').then(() => {
            dispatch(_deleteAdmin({ adminId }));
        })
            .catch(error => {
                throw (error);
            });


    };
};

export const _getAdmin = (admin) => {
    return {
        type: AdminActionTypes.GET_ADMIN,
        payload: admin
    }
};

export const getAdmin = (adminId) => {
    return (dispatch) => {
        return axios.get('/view-admin/${adminId}')
            .then(response => {
                dispatch(_getAdmin(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getAllAdmins = (admins) => {
    return {
        type: AdminActionTypes.GET_ALL_ADMINS,
        payload: admins
    }
};