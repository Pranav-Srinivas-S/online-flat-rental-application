import {Button, Grid} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import FlatList from './FlatList'
import Box from '@material-ui/core/Box';



function FlatDashBoard() {

    const history = useHistory();
    return (
        <div>
                <Box color="primary.main"  component="div" display="inline"  > <h3>ADD FLAT DETAILS:
        <Button style={style} onClick={() => history.push("/addFlat")}>Add Flat</Button></h3>
                </Box>
                <br/>
                <Box color="primary.main" component="div" display="inline"  > <h3>LIST OF FLAT DETAILS:</h3></Box>
                <Grid   >
                    <FlatList />
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



export default FlatDashBoard;