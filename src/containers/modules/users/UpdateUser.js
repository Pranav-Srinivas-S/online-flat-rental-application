import React from 'react';
import { updateUser } from "../../../redux/actions/UsersActions";
import UpdateUserForm from './UpdateUserForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../common/Footer';
import Header from '../../common/Header';

const UpdateUser = (props) => (
  <div >
    <Header/>
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update User</h2></Box>
      <Paper elevation={3} >
        <UpdateUserForm
          onSubmitUser={(state) => {
            props.dispatch(updateUser(state));
            alert("Updated Successfully");
            props.history.push('/user');
          }} />
      </Paper>
    </div>
    <Footer/>
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

export default connect()(UpdateUser);
