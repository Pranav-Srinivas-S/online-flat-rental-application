import React from 'react';
import { connect } from "react-redux";
import { addTenant } from "../../../redux/actions/TenantActions";
import AddTenantForm from "./AddTenantForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../../common/Header";
import Footer from "../../common/Footer";

/************************************************************************************
     * Component: AddTenant
     * Description: It is used to navigate to AddTenantForm
     * Created By: PRANAV SRINIVAS S
     * Created Date:  02-04-2021 
 ************************************************************************************/

const AddTenant = (props) => (
  <div >
    <Header />
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
    <Footer />
  </div>
);

/************************************************************************************
   * property: style 
   * Description: It is used for AddTenant Styling
   * Created By: PRANAV SRINIVAS S
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

export default connect()(AddTenant);