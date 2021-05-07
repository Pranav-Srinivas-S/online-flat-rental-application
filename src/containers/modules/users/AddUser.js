import React from 'react';
import { connect } from "react-redux";
import { addUser } from "../../../redux/actions/UsersActions";
import AddUserForm from "./AddUserForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../common/Footer';
import Header from '../../common/Header';


/************************************************************************************
     * Component: AddUser
     * Description: It is used to navigate to AddUserForm
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  02-04-2021 
 ************************************************************************************/

const AddUser = (props) => (
  <div >
    <Header/>
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
    <Footer/>
  </div>
);

/************************************************************************************
   * property: style 
   * Description: It is used for AddUserStyling
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
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

export default connect()(AddUser);

