import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import LandlordList from './LandlordList';
import Box from '@material-ui/core/Box';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

/************************************************************************************
     * Component: LandlordDashBoard
     * Description: It is used to navigate to all Landlord Functionalities
     * Created By: NITHISHA K A
     * Created Date:  30-04-2021 
 ************************************************************************************/


function LandlordDashBoard() {

    const history = useHistory();
    return (
        <div>
            <Header />
            <Box color="primary.main" component="div" display="inline" > <h3>Add Landlord Detail:
                <Button style={style} onClick={() => history.push("/add-landlord")}>Add Landlord</Button></h3>
            </Box>
            <br />
            <Box color="primary.main" component="div"   > <h3>List of Landlords:</h3></Box>
            <Grid   >
                <LandlordList />
            </Grid>
            <Footer />
        </div>
    );
}

/************************************************************************************
     * property: style 
     * Description: It is used for LandlordDashBoard Styling
     * Created By: NITHISHA K A
     * Created Date:  30-04-2021 
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

export default LandlordDashBoard;