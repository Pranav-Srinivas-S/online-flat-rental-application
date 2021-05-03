import { UserActionTypes } from '../constants/UserActionTypes'
import Axios from 'axios';
import { useDispatch } from 'react-redux';

const apiUrl = 'http://localhost:9191/api/ofr';

const dispatch = useDispatch();

export const addUserSuccess = (user) => {
    return {
        type : UserActionTypes.ADD_USER,
        payload : user
    }
};

export const addUser = (payload) => {
    let data = {
        userId : payload.userId,
        userName : payload.userName,
        password : payload.password,
        userType : payload.userType
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/user/add-user", data)
            .then(response => {
                dispatch(adduserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const updateUserSuccess = (user) => {
    return {
        type : UserActionTypes.UPDATE_USER,
        payload : user
    }
};

export const updateUser = (payload, userId) => {
    let data = {
        userId : payload.userId,
        userName : payload.userName,
        password : payload.password,
        userType : payload.userType
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/user/update-user/" + userId, data)
            .then(response => {
                dispatch(updateUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const deleteUserSuccess = (user) => {
    return {
        type : UserActionTypes.DELETE_USER,
        payload : user
    }
};

export const deleteuser = (userId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + "/user/remove-user/"+userId)
            .then(respose => {
                dispatch(deleteUserSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getUserSuccess = (user) => {
    return {
        type : UserActionTypes.GET_USER,
        payload : user
    }
};

export const getUser = (userId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + "/user/view-user/" + userId)
            .then(response => {
                dispatch(getUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getAllUsersSuccess = (users) => {
    return {
        type : UserActionTypes.GET_ALL_USERS,
        payload : users
    }
};

export const getAllUsers = () => {
    return(dispatch) => {
        return Axios.get(apiUrl + "/users/view-all-users/")
            .then(respose => {
                dispatch(getAllUsersSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};