import React from 'react';
import { connect } from "react-redux";
import { addLandlord } from "../../../redux/actions/LandlordActions";
import AddLandlordForm from "./AddLandlordForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


/************************************************************************************
     * Component: AddLandlord
     * Description: It is used to navigate to AddLandlordForm
     * Created By: NITHISHA K A
     * Created Date:  02-04-2021 
 *************************************************************************************/


const AddLandlord = (props) => (
  <div >
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Landlord</h2></Box>
      <Paper elevation={3} >
        <AddLandlordForm
          onSubmitLandlord={(state) => {
            props.dispatch(addLandlord(state));
            alert("Added Successfully");
            props.history.push('/landlord');
          }} />
      </Paper>

    </div>
  </div>
);


/************************************************************************************
   * property: style 
   * Description: It is used for AddLandlord Styling
   * Created By: NITHISHA K A
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

export default connect()(AddLandlord);