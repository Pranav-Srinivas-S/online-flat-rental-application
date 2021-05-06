import React from 'react';
import { connect } from "react-redux";
import {getFlatsByCost} from '../../../redux/actions/FlatActions';
import FilterByCostForm from './FilterByCostForm';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const FilterByCost = (props) => (
    <div>
         <Header />
    <div className={useStyles.root}>
      <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Flat</h2></Box>
      <Paper elevation={3} >
        <FilterByCostForm
          onSubmitFlat={(state) => {
            props.dispatch(getFlatsByCost(state));
            // props.history.push(`/view-flat-by-cost/${flatCost}/${flatAvailability}`);
          }} />
      </Paper>
    </div>
    <Footer />

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
  
  export default connect()(FilterByCost);

