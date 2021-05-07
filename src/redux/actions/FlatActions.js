import axios from '../../axios/Axios';
import { FlatActionTypes } from '../constants/FlatActionTypes';

/************************************************************************************
   * Function: addFlatSuccess 
   * Description: Action for Flat Module Add Service.
   * Created By: AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/

const _addFlat = (flat) => ({

    type: FlatActionTypes.ADD_FLAT,
    flat

});

/************************************************************************************
   * Function: addFlat
   * Description: Service for addFlat Action
   * Created By: PRANAV SRINIVAS S
   * Created Date:  04-05-2021 
 ************************************************************************************/
export const addFlat = (flatData = {
    flatCost: "",
    flatAvailability: "",
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
            flatAvailability: flatData.flatAvailability,
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
        return axios.post('/add-flat', flat)
            .then(() => {
                dispatch(_addFlat(flat));
            })
            .catch(error => {
                throw (error);
            });
    };
};
/************************************************************************************
   * Function: updateFlat
   * Description: Action for Flat Module Update Service.
   * Created By:AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/
export const _updateFlat = (flat) => ({
    type: FlatActionTypes.UPDATE_FLAT,
    flat
});

/************************************************************************************
   * Function: updateFlat
   * Description: Service for updateFlat Action
   * Created By: AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const updateFlat = (updatedFlat = {
    flatId: '',
    flatCost: '',
    flatAvailability: '',
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
            flatAvailability: updatedFlat.flatAvailability,
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
        return axios.put('/update-flat', flat).then(() => {
            dispatch(_updateFlat(flat));
        }).catch(error => {
            throw (error);
        });
    }
};

/************************************************************************************
   * Function: deleteFlat
   * Description: Action for Flat Module Delete Service.
   * Created By: AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const _deleteFlat = ({ flatId } = {}) => ({
    type: FlatActionTypes.DELETE_FLAT,
    flatId
});
/************************************************************************************
   * Function: deleteFlat
   * Description: Service for deleteFlat Action
   * Created By:AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/
export const deleteFlat = ({ flatId } = {}) => {
    return (dispatch) => {
        return axios.delete('/delete-flat/${flatId}').then(() => {
            dispatch(_deleteFlat({ flatId }));
        })
            .catch(error => {
                throw (error);
            });


    };
};
/************************************************************************************
   * Function: getFlat 
   * Description: Action for Flat Module Get Service.
   * Created By:AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/
export const _getFlat = (flat) => {
    return {
        type: FlatActionTypes.GET_FLAT,
        payload: flat
    }
};
/************************************************************************************
   * Function: getFlat
   * Description: Service for get Flat Action
   * Created By:AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/
export const getFlat = (flatId) => {
    return (dispatch) => {
        return axios.get('/view-flat/${flatId}')
            .then(response => {
                dispatch(_getFlat(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

/************************************************************************************
   * Function: getAllFlat
   * Description: Action for Flat Module Get All Service.
   * Created By: AJITHKUMAR A
   * Created Date:  04-05-2021 
 ************************************************************************************/
export const getAllFlats = (flats) => {
    return {
        type: FlatActionTypes.GET_ALL_FLATS,
        payload: flats
    }
};



