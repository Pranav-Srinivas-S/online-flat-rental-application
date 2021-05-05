import { FlatBookingActionTypes } from '../constants/FlatBookingActionTypes'
import axios from '../../axios/Axios';

const addFlatBookingSuccess = (flatBooking) => ({
    type: FlatBookingActionTypes.ADD_FLATBOOKING,
    flatBooking
});

export const addFlatBooking = (flatBookingData = {
    bookingFromDate:'',
    bookingToDate:'',
    houseNo: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    country: '',
    flatCost: "",
    flatAvailabilty: "",
}) => {
    return (dispatch) => {
        const flatBooking = {
            bookingFromDate: flatBookingData.bookingFromDate,
            bookingToDate: flatBookingData.bookingToDate,
            flatBookingDetails: {
                flatCost:flatBookingData.flatCost,
                flatAvailability:flatBookingData.flatAvailability,
                houseNo: flatBookingData.houseNo,
                street: flatbookingData.street,
                city: flatBookingData.city,
                state: flatBookingData.state,
                pin: flatBookingData.pin,
                country: flatBookingData.country
            },
        };
        console.log(flatBooking);
        return axios.post('/add-flatBooking', flatBooking)
            .then(() => {
                dispatch(addFlatBookingSuccess(flatBooking));
            })
            .catch(error => {
                throw (error);
            });
    };
};

const updateFlatBookingSuccess = (updatedFlatBooking) => ({
    type: FlatBookingActionTypes.UPDATE_FLATBOOKING,
    updatedFlatBooking
});

export const updateFlatBooking = (updatedFlatBooking= {
    bookingFromDate:'',
    bookingToDate:'',
    houseNo: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    country: '',
    flatCost: "",
    flatAvailabilty: "",
}) => {
    return (dispatch) => {
        const flatBooking = {
            bookingFromDate: flatBookingData.bookingFromDate,
            bookingToDate: flatBookingData.bookingToDate,
            FlatBookingDetails: {
                flatCost:flatBookingData.flatCost,
                flatAvailability:flatBookingData.flatAvailability,
                houseNo: flatBookingData.houseNo,
                street: flatbookingData.street,
                city: flatBookingData.city,
                state: flatBookingData.state,
                pin: flatBookingData.pin,
                country: flatBookingData.country
            },
        };
        console.log(flatBooking);
        return axios.post('/update-flatBooking', flatBooking)
            .then(() => {
                dispatch(updateFlatBookingSuccess(flatBooking));
            })
            .catch(error => {
                throw (error);
            });
    };
};

const deleteFlatBookingSuccess = ({ bookingNo} = {}) => ({
    type: FlatBookingActionTypes.DELETE_FLATBOOKING,
    bookingNo
});

export const deleteFlatBooking = ({ bookingNo} = {}) => {
    return (dispatch) => {
        return axios.delete(`/delete-flatBooking/${bookingNo}`)
            .then(() => {
                dispatch(deleteFlatBookingSuccess({ bookingNo }));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getFlatBookingSuccess = (flatBooking) => {
    return {
        type: FlatBookingActionTypes.GET_FLATBOOKING,
        payload: flatBooking
    }
};

export const getFlatBooking = (bookingNo) => {
    return (dispatch) => {
        return axios.get(`/view-flatBooking/${bookingNo}`)
            .then(response => {
                dispatch(getFlatBookingSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getAllFlatBookings = (flatBookings) => {
    return {
        type: FlatBookingActionTypes.GET_ALL_FLATBOOKINGS,
        payload: flatBookings
    }
};
