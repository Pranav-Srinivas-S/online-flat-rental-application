import React from 'react';
import { updatePassword } from "../../../redux/actions/UsersActions";
import UpdatePasswordForm from './UpdatePasswordForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UpdatePassword = (props) => (
  <div >
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Password</h2></Box>
      <Paper elevation={3} >
        <UpdatePasswordForm
          onSubmitUser={(state) => {
            props.dispatch(updatePassword(state));
            alert("Updated Successfully");
            props.history.push('/');
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

export default connect()(UpdatePassword);
