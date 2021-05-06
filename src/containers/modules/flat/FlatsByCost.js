import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector, connect } from 'react-redux';
import {getFlatsByCost} from '../../../redux/actions/FlatActions';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const FlatsByCost = () =>{
    const {flatCost} = useParams();
    const {flatAvailability} = useParams();
    const { flatId } = useParams();

    const dispatch = useDispatch();
  const history = useHistory();
  //const flats = useSelector((state) => state.flatsByCost.flats);
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
    fetchFlatsByCost();
  }, [])

  const fetchFlatsByCost = async () => {
    const result = await axios.get(`http://localhost:9191/api/ofr/view-flat-by-cost/${flatCost},${flatAvailability}`).catch((err) => { console.log("Error ", err); });
    dispatch(getFlatsByCost(result.data));
    setFlat(result.data);
  }

return(
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
            <Grid item xs={3}>
                    <Link to={`/flat`}><Button style={style} >Back To Home </Button ></Link>
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

            

export default FlatsByCost;