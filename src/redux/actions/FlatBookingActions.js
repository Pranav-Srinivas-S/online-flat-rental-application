import { FlatBookingActionTypes } from '../constants/FlatBookingActionTypes'
import axios from '../../axios/Axios';

const addFlatBookingSuccess = (flatBooking) => ({
    type: FlatBookingActionTypes.ADD_FLATBOOKING,
    flatBooking
});

export const addFlatBooking = (flatBookingData = {
    bookingFromDate:'',
    bookingToDate:'',
    flatCost: '',
    flatAvailabilty: '',
    fhouseNo: '',
    fstreet: '',
    fcity: '',
    fstate: '',
    fpin: '',
    fcountry: '',
    tenantName: '',
    tenantAge: '',
    thouseNo: '',
    tstreet: '',
    tcity: '',
    tstate: '',
    tpin: '',
    tcountry: '',
}) => {
    return (dispatch) => {
        const flatBooking = {
            bookingFromDate: flatBookingData.bookingFromDate,
            bookingToDate: flatBookingData.bookingToDate,
            flatCost:flatBookingData.flatCost,
            flat: {
                flatCost:flatBookingData.flatCost,
                flatAvailability:flatBookingData.flatAvailability,
                flatAdderss:{
                    fhouseNo: flatBookingData.fhouseNo,
                    fstreet: flatBookingData.fstreet,
                    fcity: flatBookingData.fcity,
                    fstate: flatBookingData.fstate,
                    fpin: flatBookingData.fpin,
                    fcountry: flatBookingData.fcountry
                }
           },
           tenant: {
               tenantName: flatBookingData.tenantName,
               tenantAge: flatBookingData.tenantAge,
               tenantAddress: {
                thouseNo: flatBookingData.thouseNo,
                tstreet: flatBookingData.tstreet,
                tcity: flatBookingData.tcity,
                tstate: flatBookingData.tstate,
                tpin: flatBookingData.tpin,
                tcountry: flatBookingData.tcountry
               }
           }
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

const updateFlatBookingSuccess = (flatBooking) => ({
    type: FlatBookingActionTypes.UPDATE_FLATBOOKING,
    flatBooking
});

export const updateFlatBooking = (updatedFlatBooking= {
    bookingNo:'',
    bookingFromDate:'',
    bookingToDate:'',
    flatCost: '',
    flatAvailabilty: '',
    fhouseNo: '',
    fstreet: '',
    fcity: '',
    fstate: '',
    fpin: '',
    fcountry: '',
    tenantName: '',
    tenantAge: '',
    thouseNo: '',
    tstreet: '',
    tcity: '',
    tstate: '',
    tpin: '',
    tcountry: '',
}) => {
    return (dispatch) => {
        const flatBooking = {
            bookingNo: updatedFlatBooking.bookingNo,
            bookingFromDate: updatedFlatBooking.bookingFromDate,
            bookingToDate: updatedFlatBooking.bookingToDate,
            flatCost:updatedFlatBooking.flatCost,
            flat: {
                flatCost:updatedFlatBooking.flatCost,
                flatAvailability:updatedFlatBooking.flatAvailability,
                flatAdderss:{
                    fhouseNo: updatedFlatBooking.fhouseNo,
                    fstreet: updatedFlatBooking.fstreet,
                    fcity: updatedFlatBooking.fcity,
                    fstate: updatedFlatBooking.fstate,
                    fpin: updatedFlatBooking.fpin,
                    fcountry: updatedFlatBooking.fcountry
                }
           },
           tenant: {
               tenantName: updatedFlatBooking.tenantName,
               tenantAge: updatedFlatBooking.tenantAge,
               tenantAddress: {
                thouseNo: updatedFlatBooking.thouseNo,
                tstreet: updatedFlatBooking.tstreet,
                tcity: updatedFlatBooking.tcity,
                tstate: updatedFlatBooking.tstate,
                tpin: updatedFlatBooking.tpin,
                tcountry: updatedFlatBooking.tcountry
               }
           }
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
