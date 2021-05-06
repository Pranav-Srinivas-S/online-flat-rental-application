import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getTenant, deleteTenant } from '../../../redux/actions/TenantActions';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

/************************************************************************************
     * Component: Tenant
     * Description: It is used to display specific Tenant Detail By Id
     * Created By: PRANAV SRINIVAS S
     * Created Date:  01-05-2021 
 ************************************************************************************/

const Tenant = () => {
    const { tenantId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [tenant, setTenant] = useState({
        tenantName: '',
        tenantAge: '',
        tenantAddress: {
            houseNo: '',
            street: '',
            city: '',
            state: '',
            pin: '',
            country: '',
        }
    });

    useEffect(() => {
        loadTenant();
    }, [])

    /************************************************************************************
     * Function: loadTenant
     * Description: It is used to fetch specific Tenant Detail using ID
     * Created By: PRANAV SRINIVAS S
     * Created Date:  01-05-2021 
 ************************************************************************************/

    const loadTenant = async () => {
        const result = await axios.get(`http://localhost:9191/api/ofr/view-tenant/${tenantId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getTenant(result.data));
        setTenant(result.data);
    }

    /************************************************************************************
     * Function: deleteTenantById
     * Description: It is used to delete Tenant Detail using ID
     * Created By: PRANAV SRINIVAS S
     * Created Date:  01-05-2021 
 ************************************************************************************/

    const deleteTenantById = async (tenantId) => {
        await axios.delete(`http://localhost:9191/api/ofr/delete-tenant/${tenantId}`).catch((err) => { console.log("Error", err); });
        dispatch(deleteTenant(tenantId));
        alert("Deleted Successfully");
        history.push('/tenant')
    }

    /************************************************************************************
     * Return: Specific Tenant Details
     * Description: It is used to display Tenant Detail using ID
     * Created By: PRANAV SRINIVAS S
     * Created Date:  01-05-2021 
 ************************************************************************************/

    return (
        <div>
            <Header />
            <div >
                <h1 class="display-4  bg-primary text-white"> Tenant Detail </h1>
                <ul class="list-group-item">
                    <li class="list-group-item list-group-item-info"> <h3>Tenant Id : {tenant.tenantId}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Tenant Name : {tenant.tenantName}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Tenant Age : {tenant.tenantAge}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>House Number : {tenant.tenantAddress.houseNo}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Street : {tenant.tenantAddress.street}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>City :  {tenant.tenantAddress.city}</h3></li>
                    <li class="list-group-item list-group-item-info"><h3>State : {tenant.tenantAddress.state}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Pin : {tenant.tenantAddress.pin}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Country : {tenant.tenantAddress.country}</h3> </li>
                </ul>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Button style={style} onClick={() => deleteTenantById(tenantId)}>Delete</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to={`/tenant`}><Button style={style} >Back To Home</Button ></Link>
                    </Grid>
                </Grid>
            </div>
            <   Footer />
        </div>
    )
}

/************************************************************************************
     * property: style 
     * Description: It is used for Tenant Detail Styling
     * Created By: PRANAV SRINIVAS S
     * Created Date:  01-05-2021 
 ************************************************************************************/

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

export default connect()(Tenant);