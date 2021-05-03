import axios from '../../../axios/Axios';


const _addFlat = (flat) => ({

    type: 'ADD_FLAT',
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
    type:'UPDATE_FLAT',
    updatedFlat
});
export const updateFlat = (updatedFlat) => {
    {
        return (dispatch) => {
            const flat = {
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
}

export const _deleteFlat = ({ flatId } = {}) => ({
    type: 'DELETE_FLAT',
    flatId
});

export const deleteFlat = ({ flatId } = {}) => {
    return (dispatch) => {
        return axios.delete('/tenant/delete-flat/${flatId}').then(() => {
            dispatch(_deleteFlat({ flatId }));
        });
    };
};
