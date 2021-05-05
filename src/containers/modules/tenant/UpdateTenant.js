import React from 'react';
import { updateTenant } from "../../../redux/actions/TenantActions";
import UpdateTenantForm from './UpdateTenantForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UpdateTenantForms from './UpdateTenantForms';

const UpdateTenant = (props) => (
  <div >
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Tenant</h2></Box>
      <Paper elevation={3} >
        <UpdateTenantForm
          onSubmitTenant={(state) => {
            props.dispatch(updateTenant(state));
            alert("Updated Successfully");
            props.history.push('/tenant');
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

export default connect()(UpdateTenant);