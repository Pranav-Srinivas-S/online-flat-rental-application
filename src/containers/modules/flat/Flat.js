import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { getFlat, deleteFlat } from '../../../redux/actions/FlatActions';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const Flat = () => {
    const { flatId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [flat, setFlat] = useState({
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
    });

    useEffect(() => {
        loadFlat();
    }, [])

    const loadFlat = async () => {
        const result = await axios.get(`http://localhost:9191/api/ofr/view-flat/${flatId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getFlat(result.data));
        setFlat(result.data);
    }
    const deleteFlatById = async (userId) => {
        await axios.delete(`http://localhost:9191/api/ofr/delete-flat/${userId}`).catch((err) => { console.log("Error", err); });
        dispatch(deleteFlat(flatId));
        alert("Deleted Successfully");
        history.push('/flat')
    }

    return (
        <div >
            <Header />
            <h1 class="display-4  bg-primary text-white"> FLAT DETAILS  </h1>
            <ul class="list-group-item">
                <li class="list-group-item list-group-item-info"> <h3>FLAT ID : {flatId}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>COST : {flat.flatCost}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>AVAILABILITY  : {flat.flatAvailability}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>HOUSE NO:  {flat.flatAddress.houseNo}</h3></li>
                <li class="list-group-item list-group-item-info"><h3>STREET : {flat.flatAddress.street}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>CITY : {flat.flatAddress.city}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>STATE : {flat.flatAddress.state}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>COUNTRY : {flat.flatAddress.country}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>PINCODE: {flat.flatAddress.pin}</h3> </li>

            </ul>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button style={style} onClick={() => deleteFlatById(flatId)}>Delete </Button>
                </Grid>
                <Grid item xs={3}>
                    <Link to={`/flat`}><Button style={style} >Back To Home </Button ></Link>
                </Grid>
            </Grid>
            <br />
            <Footer />

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

export default connect()(Flat);