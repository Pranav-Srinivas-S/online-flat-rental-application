import { FlatActionTypes } from '../constants/FlatActionTypes'
import Axios from 'axios';
import { useDispatch } from 'react-redux';

const apiUrl = 'http://localhost:9191/api/ofr';

const dispatch = useDispatch();

export const addFlatSuccess = (flat) => {
    return {
        type : FlatActionTypes.ADD_FLAT,
        payload : flat
    }
};

export const addFlat = (payload) => {
    let data = {
        flatId : payload.flatId,
        flatCost : payload.flatCost,
        houseNo : payload.houseNo,
        street : payload.street,
        city : payload.city,
        state : payload.state,
        pin : payload.pin,
        country : payload.country,
        flatAvailabilty : payload.flatAvailabilty
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/flat/add-flat", data)
            .then(response => {
                dispatch(addFlatSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const updateFlatSuccess = (flat) => {
    return {
        type : FlatActionTypes.UPDATE_FLAT,
        payload : flat
    }
};

export const updateFlat = (payload, flatId) => {
    let data = {
        flatId : payload.flatId,
        flatCost : payload.flatCost,
        houseNo : payload.houseNo,
        street : payload.street,
        city : payload.city,
        state : payload.state,
        pin : payload.pin,
        country : payload.country,
        flatAvailabilty : payload.flatAvailabilty
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/flat/update-flat/" + flatId, data)
            .then(response => {
                dispatch(updateFlatSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const deleteFlatSuccess = (flat) => {
    return {
        type : FlatActionTypes.DELETE_FLAT,
        payload : flat
    }
};

export const deleteFlat = (flatId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + "/tenant/delete-flat/"+flatId)
            .then(respose => {
                dispatch(deleteFlatSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getFlatSuccess = (flat) => {
    return {
        type : FlatActionTypes.GET_FLAT,
        payload : flat
    }
};

export const getFlat = (flatId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + "/flat/view-flat/" + flatId)
            .then(response => {
                dispatch(getFlatSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getAllFlatsSuccess = (flats) => {
    return {
        type : FlatActionTypes.GET_ALL_FLATS,
        payload : flats
    }
};

export const getAllFlats = () => {
    return(dispatch) => {
        return Axios.get(apiUrl + "/flat/view-all-flats/")
            .then(respose => {
                dispatch(getAllFlatsSuccess(respose.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};

export const getFlatsByCostSuccess = (flats) => {
    return {
        type : FlatActionTypes.GET_FLATS_BY_COST,
        payload : flats
    }
};

export const getFlatsByCost = (flatCost,flatAvailabilty) => {
    return (dispatch) => {
        return Axios.get(apiUrl + "/flat/view-flat-by-cost/" + flatCost,flatAvailabilty)
            .then(response => {
                dispatch(getFlatsByCostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
        });
    };
};
