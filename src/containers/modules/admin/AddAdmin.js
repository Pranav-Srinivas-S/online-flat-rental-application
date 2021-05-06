import React from 'react';
import { connect } from "react-redux";
import { addAdmin } from '../../../redux/actions/AdminActions';
import AddAdminForm from "./AddAdminForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const AddAdmin = (props) => (
  <div>
    <Header />
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Admin</h2></Box>
      <Paper elevation={3} >
        <AddAdminForm
          onSubmitAdmin={(state) => {
            props.dispatch(addAdmin(state));
            props.history.push('/admin');
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

export default connect()(AddAdmin);