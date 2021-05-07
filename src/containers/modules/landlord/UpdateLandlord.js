import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { updateLandlord } from '../../../redux/actions/LandlordActions'; 
import UpdateLandlordForm from './UpdateLandlordForm';

/****************************
     * Component: UpdateLandlord
     * Description: It is used to navigate to UpdateLandlordForm
     * Created By: NITHISHA K A
     * Created Date:  03-04-2021 
 ****************************/


const UpdateLandlord = (props) => (
  <div >
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Landlord</h2></Box>
      <Paper elevation={3} >
        <UpdateLandlordForm
          onSubmitLandlord={(state) => {
            props.dispatch(updateLandlord(state));
            alert("Updated Successfully");
            props.history.push('/landlord');
          }} />
      </Paper>
    </div>
  </div>
);
/****************************
   * property: style 
   * Description: It is used for UpdateLandlord Styling
   * Created By: NITHISHA KA 
   * Created Date:  02-05-2021 
 ******************************/

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

export default connect()(UpdateLandlord);