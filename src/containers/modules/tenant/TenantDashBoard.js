import {
    Button, Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import TenantList from './TenantList';
import Box from '@material-ui/core/Box';



function TenantDashBoard() {

    const history = useHistory();
    return (
        <div>
                <Box color="primary.main"  component="div"   > <h3>Add Tenanat Detail:
        <Button style={style} onClick={() => history.push("/addPayment")}>Add Tenantt</Button></h3>
                </Box>
                <br/>
                <Box color="primary.main" component="div"   > <h3>List of Tenants:</h3></Box>
                <Grid   >
                    <TenantList />
                </Grid>
        </div>

    );
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



export default TenantDashBoard;