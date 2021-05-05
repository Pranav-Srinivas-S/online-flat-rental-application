import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import {getFlat, deleteFlat} from '../../../redux/actions/FlatActions';

class UpdateFlatForm extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
        flatCost: "",
    flatAvailabilty: "",
    flatAddress:
    {
    houseNo: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pin: ""
    }
    };
}

    onFlatIdChange = (e) => {
    this.setState({ flatId: e.target.value });
    }

    onFlatCostChange = (e) => {
        this.setState({ flatCost: e.target.value });
    }

    onFlatAvailabilityChange = (e) => {
        this.setState({ flatAvailabilty: e.target.value });
    }

   
    onHouseNoChange = (e) => {
        this.setState(state => ({ flatAddress: { ...state.flatAddress, houseNo: e.target.value }, }));
    }

    
    onStreetChange = (e) => {
        this.setState(state => ({ flatAddress: { ...state.flatAddress, street: e.target.value }, }));
    }

    
    onCityChange = (e) => {
        this.setState(state => ({ flatAddress: { ...state.flatAddress, city: e.target.value }, }));
    }

    
    onStateChange = (e) => {
        this.setState(state => ({ flatAddress: { ...state.flatAddress, state: e.target.value }, }));
    }

    
    onCountryChange = (e) => {
        this.setState(state => ({ flatAddress: { ...state.flatAddress, country: e.target.value }, }));
    }

    
    onPinChange = (e) => {
        this.setState(state => ({ flatAddress: { ...state.flatAddress, pin: e.target.value }, }));
    }

    

    onCancel = () => {
        //this.props.handleCancel(); 
        this.props.history.push('/flat');
    }

    onSubmit = (e) => 
    {
        e.preventDefault();
        console.log("Submitted");
        console.log(this.state);
        this.props.onSubmitFlat
        (
            {
                flatCost: this.state.flatCost,
                flatAvailabilty: this.state.flatAvailabilty,
                houseNo: this.state.flatAddress.houseNo,
                street: this.state.flatAddress.street,
                city: this.state.flatAddress.city,
                state: this.state.flatAddress.state,
                country: this.state.flatAddress.country,
                pin: this.state.flatAddress.pin,
            }
        );
        
    }

    render() {
        return (
            <Container>
           
                <form onSubmit={this.onSubmit} >

                    <div>
                        <Box color="primary.main"> <h2>  FLAT DETAILS :</h2></Box>
                    </div>
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Flat ID" placeholder="Enter Flat ID"
                        value={this.state.flatId} onChange={this.onFlatIdChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Flat Cost" placeholder="Enter Flat Cost" type="number"
                        value={this.state.flatCost} onChange={this.onFlatCostChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number" label="Flat Availability" 
                        value={this.state.flatAvailabilty} onChange={this.onFlatAvailabilityChange} />  
                        </FormControl>
                        <br />

                    <div>
                        <Box color="primary.main"> <h2> ADDRESS DETAILS :</h2></Box>
                    </div>

                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number" label="House No" 
                        value={this.state.flatAddress.houseNo} onChange={this.onHouseNoChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Street" placeholder="Enter street"
                        value={this.state.flatAddress.street} onChange={this.onStreetChange} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="City" 
                        value={this.state.flatAddress.city} onChange={this.onCityChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="State" 
                        value={this.state.flatAddress.state} onChange={this.onStateChange} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Country" 
                        value={this.state.flatAddress.country} onChange={this.onCountryChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Pin Code "  type="number"
                        value={this.state.flatAddress.pin} onChange={this.onPinChange} />
                        </FormControl>
                    <br />

                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                    <Button style={style} type="submit">Update</Button>
                    <Button style={style} onChange={this.onCancel}> Cancel</Button>

                </form>
           
            </Container>
        )
    }

} 
export default connect()(UpdateFlatForm);

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "10px",
};

const errorStyle = {
    color: 'red'
};