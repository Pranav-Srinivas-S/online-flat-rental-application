import React from 'react';
import {connect} from "react-redux";
import {addFlat} from '../../../redux/actions/flat/FlatActions';
import AddFlatForm from "./AddFlatForm";

const AddFlat = (props) => (
    <div>
        <h3>Add Flat Details</h3>
        <AddFlatForm 
             onSubmitFlat={(state) => {
                 props.dispatch(addFlat(state));
                 props.history.push('/');
             }} />
        
    </div>
);

export default connect()(AddFlat);