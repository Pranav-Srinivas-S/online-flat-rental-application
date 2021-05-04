import axios from '../../axios/Axios';
import {FlatActionTypes} from '../constants/FlatActionTypes';



const _addFlat = (flat) => ({

    type: FlatActionTypes.ADD_FLAT,
    flat

});

export const addFlat = (flatData = {
    flatCost: "",
    flatAvailabilty: "",
    houseNo: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pin: ""
}) => {
    return (dispatch) => {
        const flat = {
            flatCost: flatData.flatCost,
            flatAvailabilty: flatData.flatAvailabilty,
            flatAddress:
            {
                houseNo: flatData.houseNo,
                street: flatData.street,
                city: flatData.city,
                state: flatData.state,
                country: flatData.country,
                pin: flatData.pin
            }
        };
        console.log(flat);
        const result = axios.post('/flat/add-flat', flat);
        dispatch(_addFlat(result.data));
    };
};

export const _updateFlat = (updatedFlat) => ({
    type:FlatActionTypes.UPDATE_FLAT,
    updatedFlat
});
export const updateFlat = (updatedFlat = {
    flatCost: '',
    flatAvailabilty: '',
    houseNo: '',
    street: '',
    city: '',
    state: '',
    country: '',
    pin: ''
 }) => {
        return (dispatch) => {
            const flat = {
                flatId: updatedFlat.flatId,
                flatCost: updatedFlat.flatCost,
                flatAvailabilty: updatedFlat.flatAvailabilty,
                flatAddress:
                {
                    houseNo: updatedFlat.houseNo,
                    street: updatedFlat.street,
                    city: updatedFlat.city,
                    state: updatedFlat.state,
                    country: updatedFlat.country,
                    pin: updatedFlat.pin,
                }
            };
            console.log(flat);
            return axios.put('/flat/update-flat', flat).then(() => {
                dispatch(_updateFlat(flat));
            }).catch(error => {
                throw (error);
            });
        }
    };


export const _deleteFlat = ({ flatId } = {}) => ({
    type: FlatActionTypes.DELETE_FLAT,
    flatId
});

export const deleteFlat = ({ flatId } = {}) => {
    return (dispatch) => {
        return axios.delete('/tenant/delete-flat/${flatId}').then(() => {
            dispatch(_deleteFlat({ flatId }));
        })
        .catch(error => {
            throw (error);
        });


    };
};

export const _getFlat = (flat) => {
    return{
        type:FlatActionTypes.GET_FLAT,
        payload:flat
    }
}

export const getFlat = (flatId) => {
    return (dispatch) => {
        return axios.get('/flat/view-flat/${flatId}')
          .then(response => {
              dispatch(_getFlat(response.data))
          })
          .catch(error => {
              throw (error);
          });
    };
};


export const getAllFlats = (flats) => {
    return{
        type: FlatActionTypes.GET_ALL_FLATS,
        payload: flats
    }
};