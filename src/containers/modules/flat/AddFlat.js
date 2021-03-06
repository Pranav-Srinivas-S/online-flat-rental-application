import React from 'react';
import { connect } from "react-redux";
import { addFlat } from '../../../redux/actions/FlatActions';
import AddFlatForm from "./AddFlatForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

/************************************************************************************
     * Component: AddFlat
     * Description: It is used to navigate to AddFlatForm
     * Created By: AJITHKUMAR A
     * Created Date:  02-04-2021 
 ************************************************************************************/


const AddFlat = (props) => (
  <div>
    <Header />
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Flat</h2></Box>
      <Paper elevation={3} >
        <AddFlatForm
          onSubmitFlat={(state) => {
            props.dispatch(addFlat(state));
            props.history.push('/flat');
          }} />
      </Paper>
    </div>
    <Footer />
  </div>
);

/************************************************************************************
   * property: style 
   * Description: It is used for AddFalt Styling
   * Created By:AJITHKUMAR A
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

export default connect()(AddFlat);