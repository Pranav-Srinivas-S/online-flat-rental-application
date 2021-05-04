import React from 'react';
import { connect } from "react-redux";
import { addTenant } from "../../../redux/actions/TenantActions";
import AddTenantForm from "./AddTenantForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddTenant = (props) => (
    <div >
    <div className={useStyles.root}>
         <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Tenant</h2></Box>
         <Paper elevation={3} >
        <AddTenantForm 
             onSubmitTenant={(state) => {
                 props.dispatch(addTenant(state));
                 alert("Added Successfully");
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

export default connect()(AddTenant);