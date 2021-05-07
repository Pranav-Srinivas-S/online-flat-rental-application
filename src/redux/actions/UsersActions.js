import { UserActionTypes } from '../constants/UsersActionTypes'
import axios from '../../axios/Axios';

/************************************************************************************
   * Function: addUserSuccess 
   * Description: Action for User Module Add Service.
   * Created By:Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/


const addUserSuccess = (user) => ({
    type: UserActionTypes.ADD_USER,
    user
});

/************************************************************************************
   * Function: addUser
   * Description: Service for addUserSuccess Action
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const addUser = (userData = {
    userName: '',
    password: '',
    userType: ''
}) => {
    return (dispatch) => {
        const user = {
            userName: userData.userName,
            password: userData.password,
            userType: userData.userType
        };
        console.log(user);
        const result = axios.post('/add-user', user);
        dispatch(addUserSuccess(result.data));
    };
};

/************************************************************************************
   * Function: updateUserSuccess 
   * Description: Action for User Module Update Service.
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath 
   * Created Date:  04-05-2021 
 ************************************************************************************/

const updateUserSuccess = (user) => ({
    type: UserActionTypes.UPDATE_USER,
    user
});

/************************************************************************************
   * Function: updateUser
   * Description: Service for updateUserSuccess Action
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const updateUser = (updatedUser = {
    userId: '',
    userName: '',
    password: '',
    userType: ''
}) => {
    return (dispatch) => {
        const user = {
            userId: updatedUser.userId,
            userName: updatedUser.userName,
            password: updatedUser.password,
            userType: updatedUser.userType,
        };
        console.log(user);
        return axios.put('/update-user', user)
            .then(() => {
                dispatch(updateUserSuccess(user));
            })
            .catch(error => {
                throw (error);
            });
    }
};

/************************************************************************************
   * Function: deleteUserSuccess 
   * Description: Action for User Module Delete Service.
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/


const deleteUserSuccess = ({ userId } = {}) => ({
    type: UserActionTypes.DELETE_USER,
    userId
});

/************************************************************************************
   * Function: deleteUser
   * Description: Service for deleteUserSuccess Action
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const deleteUser = ({ userId } = {}) => {
    return (dispatch) => {
        return axios.delete('/remove-user/${userId}')
            .then(() => {
                dispatch(deleteUserSuccess({ userId }));
            })
            .catch(error => {
                throw (error);
            });
    };
};

/************************************************************************************
   * Function: getUserSuccess 
   * Description: Action for User Module Get Service.
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const getUserSuccess = (user) => {
    return {
        type: UserActionTypes.GET_USER,
        payload: user

    }
}
/************************************************************************************
   * Function: getUser
   * Description: Service for getUserSuccess Action
   * Created By:  Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const getUser = (userId) => {
    return (dispatch) => {
        return axios.get(`/view-user/${userId}`)
            .then(response => {
                dispatch(getUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
/************************************************************************************
   * Function: getAllUsers
   * Description: Action for User Module Get All Service.
   * Created By:  Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const getAllUsers = (users) => {
    return {
        type: UserActionTypes.GET_ALL_USERS,
        payload: users
    }
};

const updatePasswordSuccess = (user) => ({
    type: UserActionTypes.UPDATE_PASSWORD,
    user
});

export const updatePassword = (updatedPassword = {
    userId: '',
    userName: '',
    password: '',
    userType: '',
    newpass: '',
}) => {
    return (dispatch) => {
        const user = {
            userId: updatedPassword.userId,
            userName: updatedPassword.userName,
            password: updatedPassword.password,
            userType: updatedPassword.userType,
            newpass: updatedPassword.newpass,
        };
        let np = user.newpass;
        console.log(np);
        return axios.put(`/update-password/${np}`, user)
            .then(() => {
                dispatch( updatePasswordSuccess (user));
            })
            .catch(error => {
                throw (error);
            });
    }
};
