import React from 'react';
import { updateFlatBooking} from "../../../redux/actions/FlatBookingActions";
import UpdateFlatBookingForm from './UpdateFlatBookingForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UpdateFlatBooking = (props) => (
    <div className={useStyles.root}>
        <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update FlatBooking</h2></Box>
        <Paper elevation={3} >
        <UpdateFlatBookingForm 
        
            //tenant = {props.tenant}
            onSubmitFlatBooking = {(flatBooking) => {
                props.dispatch(updateFlatBooking(flatBooking));
                alert("Updated Successfully");
                props.history.push('/flatBooking');
            }}
        /> 
        </Paper>
    </div>
)

// const mapStateToProps = (state,props) => {
//     return state.tenantId === props.match.params.tenantId
    
// };

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

export default connect()(UpdateFlatBooking);