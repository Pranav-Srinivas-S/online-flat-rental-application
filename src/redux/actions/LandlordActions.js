import { LandlordActionTypes } from '../constants/LandlordActionTypes'
import axios from '../../axios/Axios';


const addLandlordSuccess = (landlord) => ({
    type: LandlordActionTypes.ADD_LANDLORD,
    landlord: landlord
});

export const addLandlord = (landlordData = {
    landlordName: '',
    landlordAge: '',
    flatCost:'',
    houseNo: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    country: '',
    flatAvailability:''
}) => {
    return (dispatch) => {
        const landlord = {
            landlordName: landlordData.landlordName,
            landlordAge: landlordData.landlordAge,
            flatList:{
                flatCost: landlordData.flatCost,
                flatAddress: {
                    houseNo: landlordData.houseNo,
                    street: landlordData.street,
                    city: landlordData.city,
                    state: landlordData.state,
                    pin: landlordData.pin,
                    country: landlordData.country
                },
                flatAvailability: landlordData.flatAvailability,
            }
            
        };
        console.log(landlord);
        return axios.post('/add-landlord', landlord)
            .then(() => {
                dispatch(addLandlordSuccess(landlord));
            })
            .catch(error => {
                throw (error);
            });
    };
};

const updateLandlordSuccess = (landlord) => ({
    type: LandlordActionTypes.UPDATE_LANDLORD,
    landlord
});

export const updateLandlord = (updatedLandlord = {
    landlordId: '',
    landlordName: '',
    landlordAge: '',
    flatCost:'',
    houseNo: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    country: '',
    flatAvailability:'',

}) => {
    return (dispatch) => {
        const landlord = {
            landlordId: updatedLandlord.landlordId,
            landlordName: updatedLandlord.landlordName,
            landlordAge: updatedLandlord.landlordAge,
            flatList:{
                flatCost:updatedLandlord.flatCost,
                flatAddress: {
                    houseNo: updatedLandlord.houseNo,
                    street: updatedLandlord.street,
                    city: updatedLandlord.city,
                    state: updatedLandlord.state,
                    pin: updatedLandlord.pin,
                    country: updatedLandlord.country
                },
                flatAvailability:updatedLandlord.flatAvailability,
            }            
           
        };
        console.log(landlord);
        return axios.put('/update-landlord', landlord)
            .then(() => {
                dispatch(updateLandlordSuccess(landlord));
            })
            .catch(error => {
                throw (error);
            });
    }
};

const deleteLandlordSuccess = ({ landlordId } = {}) => ({
    type: LandlordActionTypes.DELETE_LANDLORD,
    landlordId
});

export const deleteLandlord = ({ landlordId } = {}) => {
    return (dispatch) => {
        return axios.delete(`/delete-landlord/${landlordId}`)
            .then(() => {
                dispatch(deleteLandlordSuccess({ landlordId }));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getLandlordSuccess = (landlord) => {
    return {
        type: LandlordActionTypes.GET_LANDLORD,
        payload: landlord
    }
};

export const getLandlord = (landlordId) => {
    return (dispatch) => {
        return axios.get(`/view-landlord/${landlordId}`)
            .then(response => {
                dispatch(getLandlordSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getAllLandlords = (landlords) => {
    return {
        type: LandlordActionTypes.GET_ALL_LANDLORDS,
        payload: landlords
    }
};
