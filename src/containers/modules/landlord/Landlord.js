import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getLandlord, deleteLandlord } from '../../../redux/actions/LandlordActions';
import { Button, Grid, List } from '@material-ui/core';
import { Link } from "react-router-dom"

const Landlord = () => {
    const { landlordId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [landlord, setLandlord] = useState({
        landlordName: '',
        landlordAge: '',    
        flatList:[
            {
                flatCost: "",
                flatAvailability: "",
                flatAddress: 
                {
                    houseNo: "",
                    street: "",
                    city: "",
                    state: "",
                    country: "",
                    pin: "" 
            }
            
            }
        ]
    });

    useEffect(() => {
        loadLandlord();
    }, [])

    const loadLandlord= async () => {
        
        const result = await axios.get(`http://localhost:9191/api/ofr/view-landlord/${landlordId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getLandlord(result.data));
        setLandlord(result.data);
    }

    const deleteLandlordById = async (landlordId) => {
        await axios.delete(`http://localhost:9191/api/ofr/delete-landlord/${landlordId}`).catch((err) => { console.log("Error", err); });
        dispatch(deleteLandlord(landlordId));
        alert("Deleted Successfully");
        history.push('/landlord')
    }

    return (
        <div >
            <h1 class="display-4  bg-primary text-white"> Landlord Detail </h1>
            <ul class="list-group-item">
                <li class="list-group-item list-group-item-info"> <h3>Landlord Id : {landlord.landlordId}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Landlord Name : {landlord.landlordName}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Landlord Age : {landlord.landlordAge}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Flat Cost: {landlord.flatList.map( flatList=> flatList.flatCost)}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Flat Availability: {landlord.flatList.map( flatList=> flatList.flatAvailability)}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>House Number : {landlord.flatList.map( flatList=>flatList.flatAddress.houseNo)}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Street : {landlord.flatList.map( flatList=>flatList.flatAddress.street)}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>City :  {landlord.flatList.map( flatList=> flatList.flatAddress.city)}</h3></li>
                <li class="list-group-item list-group-item-info"><h3>State : {landlord.flatList.map( flatList=>flatList.flatAddress.state)}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Pin : {landlord.flatList.map( flatList=> flatList.flatAddress.pin)}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Country : {landlord.flatList.map( flatList=> flatList.flatAddress.country)}</h3> </li>
                
            </ul>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button style={style} onClick={() => deleteLandlordById(landlordId)}>Delete</Button>
                </Grid>
                <Grid item xs={3}>
                    <Link to={`/landlord`}><Button style={style} >Back To Home</Button ></Link>
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

export default connect()(Landlord);