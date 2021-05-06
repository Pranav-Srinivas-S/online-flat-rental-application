import React from 'react';
import { updateAdmin } from '../../../redux/actions/AdminActions';
import UpdateAdminForm from './UpdateAdminForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const updateAdminComoponent = (props) => (
  <div>
    <Header />
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Admin</h2></Box>
      <Paper elevation={3} >

        <UpdateAdminForm
          admin= {props.admin}
          onSubmitAdmin={(state) => {
            props.dispatch(updateAdmin(state));
            alert("updated Successfully");
            props.history.push('/admin');
          }}
        />
      </Paper>
    </div>
    <br />
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

export default connect()(updateAdminComoponent);