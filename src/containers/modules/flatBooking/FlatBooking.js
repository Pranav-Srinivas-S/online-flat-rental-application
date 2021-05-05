import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getFlatBooking, deleteFlatBooking } from '../../../redux/actions/FlatBookingActions';
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"

const FlatBooking = () => {
    const {bookingNo} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [flatBooking,setflatBooking] = useState({
        bookingFromDate: '',
        bookingToDate: '',
        flatBookingDetails: {
            flatCost:'',
            flatAvailability:'',
            houseNo: '',
            street: '',
            city: '',
            state: '',
            pin: '',
            country: '',
        }
    });

    useEffect(() => {
        loadFlatBooking();
    },[])

    const loadFlatBooking = async () => 
    {
        const result=await axios.get(`http://localhost:9191/api/ofr/view-flatBooking/${bookingNo}`).catch((err) => { console.log("Error ", err); });
        dispatch(getFlatBooking(result.data));
        setFlatBooking(result.data);
    }
    
    const  deleteFlatBookingById = async (bookingNo) => {
        await axios.delete(`http://localhost:9191/api/ofr/delete-flatBooking/${bookingNo}`).catch((err) => {console.log("Error" , err);});
       dispatch(deleteFlatBooking(bookingNo));
       alert("Deleted Successfully");
       history.push('/flatBooking')
     }

    return (
        <div >
        <h1 class="display-4  bg-primary text-white"> Flat Booking Details </h1> 
        <ul class="list-group-item">
            <li class="list-group-item list-group-item-info"> <h3>booking No : {flatBooking.bookingNo}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>booking From Date : {flatBooking.bookingFromDate}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>booking To Date : {flatBooking.bookingToDate}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>flatCost : {flatBooking.flatBookingDetails.flatCost}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>flatAvailability:  {flatBooking.flatBookingDetails.flatAvailability}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>House Number : {flatBooking.flatBookingDetails.houseNo}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Street : {flatBooking.flatBookingDetails.street}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>City :  {flatBooking.flatBookingDetails.city}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>State : {flatBooking.flatBookingDetails.state}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Pin : {flatBooking.flatBookingDetails.pin}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Country : {flatBooking.flatBookingDetails.country}</h3> </li>
        </ul>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button style={style} onClick={ () => deleteFlatBookingById(bookingNo)}>Delete</Button>
        </Grid>
        <Grid item xs={3}>
        <Link to={`/flatBooking`}><Button style={style} >Back To Home</Button ></Link>
        </Grid>
        </Grid>

        </div>
    )
}

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "10px",
};

export default connect()(FlatBooking);