import { UserActionTypes } from '../constants/UsersActionTypes'
import axios from '../../axios/Axios';

const addUserSuccess = (user) => ({
    type: UserActionTypes.ADD_USER,
    user
});

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

const updateUserSuccess = (user) => ({
    type: UserActionTypes.UPDATE_USER,
    user
});

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

const deleteUserSuccess = ({ userId } = {}) => ({
    type: UserActionTypes.DELETE_USER,
    userId
});

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

export const getUserSuccess = (user) => {
    return {
        type: UserActionTypes.GET_USER,
        payload: user

    }
}

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

export const getAllUsers = (users) => {
    return {
        type: UserActionTypes.GET_ALL_USERS,
        payload: users
    }
};
