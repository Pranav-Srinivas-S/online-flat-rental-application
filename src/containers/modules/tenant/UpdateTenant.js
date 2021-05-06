import React from 'react';
import { updateTenant } from "../../../redux/actions/TenantActions";
import UpdateTenantForm from './UpdateTenantForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../../common/Header";
import Footer from "../../common/Footer";

/************************************************************************************
     * Component: UpdateTenant
     * Description: It is used to navigate to UpdateTenantForm
     * Created By: PRANAV SRINIVAS S
     * Created Date:  03-04-2021 
 ************************************************************************************/

const UpdateTenant = (props) => (
  <div >
    <Header />
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
    <Footer />
  </div>
);

/************************************************************************************
   * property: style 
   * Description: It is used for UpdateTenant Styling
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

export default connect()(UpdateTenant);