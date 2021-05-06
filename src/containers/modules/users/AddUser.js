import React from 'react';
import { connect } from "react-redux";
import { addUser } from "../../../redux/actions/UsersActions";
import AddUserForm from "./AddUserForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddUser = (props) => (
  <div >
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add User</h2></Box>
      <Paper elevation={3} >
        <AddUserForm
          onSubmitUser={(state) => {
            props.dispatch(addUser(state));
            alert("Added Successfully");
            props.history.push('/user');
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

export default connect()(AddUser);

