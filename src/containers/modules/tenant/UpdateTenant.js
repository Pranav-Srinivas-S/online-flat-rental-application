import React from 'react';
import { updateTenant } from "../../../redux/actions/TenantActions";
import UpdateTenantForm from './UpdateTenantForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UpdateTenant = (props) => (
    <div className={useStyles.root}>
        <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Tenant</h2></Box>
        <Paper elevation={3} >
        <UpdateTenantForm 
            //tenant = {props.tenant}
            onSubmitTenant = {(tenant) => {
                props.dispatch(updateTenant(tenant));
                alert("Updated Successfully");
                props.history.push('/tenant');
            }}
        /> 
        </Paper>
    </div>
)

// const mapStateToProps = (state,props) => {
//     return state.tenantId === props.match.params.tenantId
    
// };

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