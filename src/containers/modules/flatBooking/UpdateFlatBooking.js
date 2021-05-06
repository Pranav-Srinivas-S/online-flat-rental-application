import React from 'react';
import { connect } from "react-redux";
import { updateFlatBooking } from "../../../redux/actions/FlatBookingActions";
import UpdateFlatBookingForm from "./UpdateFlatBookingForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

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