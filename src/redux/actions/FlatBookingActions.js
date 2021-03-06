import { FlatBookingActionTypes } from '../constants/FlatBookingActionTypes'
import axios from '../../axios/Axios';
/************************************************************************************
   * Function: addFlatBookingSuccess 
   * Description: Action for FlatBooking Module Add Service.
   * Created By: ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/

const addFlatBookingSuccess = (flatBooking) => ({
    type: FlatBookingActionTypes.ADD_FLATBOOKING,
    flatBooking
});
/************************************************************************************
   * Function: addFlatBooking
   * Description: Service for addFlatBookingSuccess Action
   * Created By:ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/
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
            flat: {
                flatCost:flatBookingData.flatCost,
                flatAvailability:flatBookingData.flatAvailability,
                flatAddress:{
                    houseNo: flatBookingData.fhouseNo,
                    street: flatBookingData.fstreet,
                    city: flatBookingData.fcity,
                    state: flatBookingData.fstate,
                    pin: flatBookingData.fpin,
                    country: flatBookingData.fcountry
                },
           },
           tenant: {
               tenantName: flatBookingData.tenantName,
               tenantAge: flatBookingData.tenantAge,
               tenantAddress: {
                houseNo: flatBookingData.thouseNo,
                street: flatBookingData.tstreet,
                city: flatBookingData.tcity,
                state: flatBookingData.tstate,
                pin: flatBookingData.tpin,
                country: flatBookingData.tcountry
               },
           }
        };

        console.log("this is action",flatBooking);
        return axios.post('/add-flatBooking', flatBooking)
            .then(() => {
                dispatch(addFlatBookingSuccess(flatBooking));
            })
            .catch(error => {
                throw (error);
            });
    };
};
/************************************************************************************
   * Function: updateFlatBookingSuccess 
   * Description: Action for FlatBooking Module Update Service.
   * Created By:ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/
const updateFlatBookingSuccess = (flatBooking) => ({
    type: FlatBookingActionTypes.UPDATE_FLATBOOKING,
    flatBooking
});
/************************************************************************************
   * Function: updateFlatBooking
   * Description: Service for updateFlatBookingSuccess Action
   * Created By:ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/
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
                    houseNo: updatedFlatBooking.fhouseNo,
                    street: updatedFlatBooking.fstreet,
                    city: updatedFlatBooking.fcity,
                    state: updatedFlatBooking.fstate,
                    pin: updatedFlatBooking.fpin,
                    country: updatedFlatBooking.fcountry
                }
           },
           tenant: {
               tenantName: updatedFlatBooking.tenantName,
               tenantAge: updatedFlatBooking.tenantAge,
               tenantAddress: {
                houseNo: updatedFlatBooking.thouseNo,
                street: updatedFlatBooking.tstreet,
                city: updatedFlatBooking.tcity,
                state: updatedFlatBooking.tstate,
                pin: updatedFlatBooking.tpin,
                country: updatedFlatBooking.tcountry
               }
           }
        };
        console.log(flatBooking);
        return axios.put('/update-flatBooking', flatBooking)
            .then(() => {
                dispatch(updateFlatBookingSuccess(flatBooking));
            })
            .catch(error => {
                throw (error);
            });
    };
};
/************************************************************************************
   * Function: deleteFlatBookingSuccess 
   * Description: Action for  FlatBooking Module Delete Service.
   * Created By:ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/
const deleteFlatBookingSuccess = ({ bookingNo} = {}) => ({
    type: FlatBookingActionTypes.DELETE_FLATBOOKING,
    bookingNo
});

/************************************************************************************
   * Function: deleteFlatBooking
   * Description: Service for deleteFlatBookingSuccess Action
   * Created By: ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/

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
/************************************************************************************
   * Function: getFlatBookingSuccess 
   * Description: Action for FlatBooking Module Get Service.
   * Created By: ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/

export const getFlatBookingSuccess = (flatBooking) => {
    return {
        type: FlatBookingActionTypes.GET_FLATBOOKING,
        payload: flatBooking
    }
};
/************************************************************************************
   * Function: getFlatBooking
   * Description: Service for getFlatBookingSuccess Action
   * Created By: ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/

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
/************************************************************************************
   * Function: getAllFlatBooking 
   * Description: Action for FlatBooking Module Get All Service.
   * Created By: ABDUL BASHEER SHAIK
   * Created Date:  04-05-2021 
 ************************************************************************************/
export const getAllFlatBookings = (flatBookings) => {
    return {
        type: FlatBookingActionTypes.GET_ALL_FLATBOOKINGS,
        payload: flatBookings
    }
};
