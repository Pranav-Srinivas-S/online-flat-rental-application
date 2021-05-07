import React from 'react';
import { connect } from "react-redux";
import { updateFlatBooking } from "../../../redux/actions/FlatBookingActions";
import UpdateFlatBookingForm from "./UpdateFlatBookingForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

/************************************************************************************
     * Component: UpdateFlatBooking
     * Description: It is used to navigate to UpdateFlatBookingForm
     * Created By: ABDUL BASHEER SHAIK
     * Created Date:  03-04-2021 
 ************************************************************************************/

const UpdateFlatBooking = (props) => (
  <div >
    <Header />
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update FlatBooking</h2></Box>
      <Paper elevation={3} >
        <UpdateFlatBookingForm
          onSubmitFlatBooking={(state) => {
            props.dispatch(updateFlatBooking(state));
            alert("Updated Successfully");
          props.history.push('/flatBooking');
          }} />
      </Paper>
    </div>
    <Footer />
  </div>
);
/************************************************************************************
   * property: style 
   * Description: It is used for UpdateFlatBooking Styling
   * Created By:ABDUL BASHEER SHAIK
   * Created Date:  02-05-2021 
 ************************************************************************************/

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