import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { getAdmin, deleteAdmin } from '../../../redux/actions/AdminActions';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const Admin = () => {
    const { adminId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [admin, setAdmin] = useState({
        adminPassword: "",
       
    });

    useEffect(() => {
        loadAdmin();
    }, [])

    const loadAdmin = async () => {
        const result = await axios.get(`http://localhost:9191/api/ofr/view-admin/${adminId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getAdmin(result.data));
        setAdmin(result.data);
    }
    const deleteAdminById = async (adminId) => {
        await axios.delete(`http://localhost:9191/api/ofr/delete-admin/${adminId}`).catch((err) => { console.log("Error", err); });
        dispatch(deleteAdmin(adminId));
        alert("Deleted Successfully");
        history.push('/admin')
    }

    return (
        <div >
            <Header />
            <h1 class="display-4  bg-primary text-white"> ADMIN DETAILS  </h1>
            <ul class="list-group-item">
                <li class="list-group-item list-group-item-info"> <h3>ADMIN ID : {adminId}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>PASSWORD : {admin.adminPassword}</h3> </li>
               

            </ul>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button style={style} onClick={() => deleteAdminById(adminId)}>Delete </Button>
                </Grid>
                <Grid item xs={3}>
                    <Link to={`/admin`}><Button style={style} >Back To Home </Button ></Link>
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

export default connect()(Admin);