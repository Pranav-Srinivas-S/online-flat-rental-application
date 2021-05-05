import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import UpdateLandlordForm from './UpdateLandlordForm';

const UpdateLandlord = (props) => (
  <div >
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Landlord</h2></Box>
      <Paper elevation={3} >
        <UpdateLandlordForm
          onSubmitLandlord={(state) => {
            props.dispatch(UpdateLandlord(state));
            alert("Updated Successfully");
            props.history.push('/landlord');
          }} />
      </Paper>
    </div>
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

export default connect()(UpdateLandlord);