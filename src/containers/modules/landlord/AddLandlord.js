import React from 'react';
import { connect } from "react-redux";
import { addLandlord } from "../../../redux/actions/LandlordActions";
import AddLandlordForm from "./AddLandlordForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../common/Footer';
import Header from '../../common/Header';

const AddLandlord = (props) => (
  <div >
    <Header />
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Landlord</h2></Box>
      <Paper elevation={3} >
        <AddLandlordForm
          onSubmitLandlord={(state) => {
            props.dispatch(addLandlord(state));
            alert("Added Successfully");
            props.history.push('/landlord');
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

export default connect()(AddLandlord);