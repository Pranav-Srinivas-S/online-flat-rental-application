import React from 'react';
import {updateFlat} from '../../../redux/actions/FlatActions';
import UpdateFlatForm from './UpdateFlatForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const updateFlatComoponent = (props) => (
    <div className={useStyles.root}>
        <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update flat</h2></Box>
        <Paper elevation={3} >
        
        <UpdateFlatForm 
            //flat= {props.flat}
            onSubmitFlat = {(state) => {
                props.dispatch(updateFlat(state));
                alert("updated Successfully");
                props.history.push('/flat');
            }}
        /> 
        </Paper>
    </div>
);

// const mapStateToProps = (state,props) => {
//     return state.flatId === props.match.params.flatId
    
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

export default connect()(updateFlatComoponent);