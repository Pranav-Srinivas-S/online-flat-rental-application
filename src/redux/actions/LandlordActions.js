import { LandlordActionTypes } from '../constants/LandlordActionTypes'
import Axios from 'axios';
import { useDispatch } from 'react-redux';

const apiUrl = 'http://localhost:9191/api/ofr';

const dispatch = useDispatch();

export const addLandlordSuccess = (landlord) => {
    return {
        type : LandlordActionTypes.ADD_LANDLORD,
        payload : landlord
    }
};

export const ADD_LANDLORD = (payload) => {
    let data = {
        landlordId : payload.landlordId,
        landlordName : payload.landlordName,
        landlordAge : payload.landlordAge,
        
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/landlord/add-landlord", data)
            .then(response => {
                dispatch(addLandlordSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const updateLandlordSuccess = (landlord) => {
    return {
        type : LandlordActionTypes.UPDATE_LANDLORD,
        payload : landlord
    }
};

export const UPDATE_LANDLORD = (payload, landlordId) => {
    let data = {
        landlordId : payload.landlordId,
        landlordName : payload.landlordName,
        landlordAge : payload.landlordAge,
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/landlord/update-landlord/" + landlordId, data)
            .then(response => {
                dispatch(updateLandlordSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const deleteLandlordSuccess = (landlord) => {
    return {
        type : LandlordActionTypes.DELETE_LANDLORD,
        payload : landlord
    }
};

export const deleteProduct = (landlordId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + "/landlord/delete-landlord/"+landlordId)
            .then(respose => {
                dispatch(deleteLandlordSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getLandlordSuccess = (landlord) => {
    return {
        type : LandlordActionTypes.GET_LANDLORD,
        payload : landlord
    }
};

export const getLandlord = (landlordId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + "/landlord/view-landlord/" + landlordId)
            .then(response => {
                dispatch(getLandlordSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getAlllandlordsSuccess = (landlords) => {
    return {
        type : LandlordActionTypes.GET_ALL_LANDLORDS,
        payload : landlords
    }
};

export const getAllLandlords = () => {
    return(dispatch) => {
        return Axios.get(apiUrl + "/landlord/view-all-landlords/")
            .then(respose => {
                dispatch(getAllLandlordsSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};