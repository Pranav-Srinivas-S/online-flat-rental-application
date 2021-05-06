import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import AdminList from './AdminList'
import Box from '@material-ui/core/Box';
import Header from '../../common/Header';
import Footer from '../../common/Footer';



function AdminDashBoard() {

    const history = useHistory();
    return (
        <div>
            <Header />
            <br />
            <Box color="primary.main" component="div" display="inline"  > <h3>ADD ADMIN DETAILS:
        <Button style={style} onClick={() => history.push("/add-admin")}>Add Admin</Button></h3>
            </Box>
            <br />
            <Box color="primary.main" component="div" display="inline"  > <h3>LIST OF ADMIN DETAILS:</h3></Box>
            <Grid>
                <AdminList />
            </Grid>
            <Footer />
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



export default AdminDashBoard;