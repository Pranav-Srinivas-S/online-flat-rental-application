import React from 'react';
import { updateFlat } from '../../../redux/actions/FlatActions';
import UpdateFlatForm from './UpdateFlatForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

/************************************************************************************
     * Component: UpdateFlat
     * Description: It is used to navigate to UpdateFlatForm
     * Created By: AJITHKUMAR A
     * Created Date:  03-04-2021 
 ************************************************************************************/
const updateFlatComoponent = (props) => (
  <div>
    <Header />
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update flat</h2></Box>
      <Paper elevation={3} >

        <UpdateFlatForm
          flat= {props.flat}
          onSubmitFlat={(state) => {
            props.dispatch(updateFlat(state));
            alert("updated Successfully");
            props.history.push('/flat');
          }}
        />
      </Paper>
    </div>
    <br />
    <Footer />
  </div>
);

// const mapStateToProps = (state,props) => {
//     return state.flatId === props.match.params.flatId

// };

/************************************************************************************
   * property: style 
   * Description: It is used for UpdateFlat Styling
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

export default connect()(updateFlatComoponent);