import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import FlatValidation from './FlatValidation';

class AddFlatForm extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
        flatCost: "",
    flatAvailability: "",
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
    this.validators = FlatValidation;
    this.resetValidators();
}

updateValidators = (fieldName, value) => {
    this.validators[fieldName].errors = [];
    this.validators[fieldName].state = value;
    this.validators[fieldName].valid = true;
    this.validators[fieldName].rules.forEach((rule) => {
        if (rule.test instanceof RegExp) {
            if (!rule.test.test(value)) {
                this.validators[fieldName].errors.push(rule.message);
                this.validators[fieldName].valid = false;
            }
        } else if (typeof rule.test === 'function') {
            if (!rule.test(value)) {
                this.validators[fieldName].errors.push(rule.message);
                this.validators[fieldName].valid = false;
            }
        }
    });
}

resetValidators = () => {
    Object.keys(this.validators).forEach((fieldName) => {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = '';
        this.validators[fieldName].valid = false;
    });
}

displayValidationErrors = (fieldName) => {
    const validator = this.validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
        const errors = validator.errors.map((info, index) => {
            return <span style={errorStyle} key={index}>* {info}</span>;
        });

        return (
            <div style={errorStyle} className="col s12 row">
                {errors}
            </div>
        );
    }
    return result;
}

isFormValid = () => {
    let status = true;
    Object.keys(this.validators).forEach((field) => {
        if (!this.validators[field].valid) {
            status = false;
        }
    });
    return status;
}

handleFlatChange(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}

handleFlatAddressChange(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState.flatAddress[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}

onCancel = () => {
    this.props.history.push('/flat');
}

onSubmit = event => {

    console.log("Submitted");
    console.log(this.state);
    event.preventDefault();
    this.props.onSubmitFlat(
        {
            flatCost: this.state.flatCost,
                        flatAvailability: this.state.flatAvailability,
                        houseNo: this.state.flatAddress.houseNo,
                        street: this.state.flatAddress.street,
                        city: this.state.flatAddress.city,
                        state: this.state.flatAddress.state,
                        country: this.state.flatAddress.country,
                        pin: this.state.flatAddress.pin,
        }
    );
}


    // onFlatCostChange = (e) => {
    //     this.setState({ flatCost: e.target.value });
    // }

    // onFlatAvailabilityChange = (e) => {
    //     this.setState({ flatAvailability: e.target.value });
    // }

   
    // onHouseNoChange = (e) => {
    //     this.setState(state => ({ flatAddress: { ...state.flatAddress, houseNo: e.target.value }, }));
    // }

    
    // onStreetChange = (e) => {
    //     this.setState(state => ({ flatAddress: { ...state.flatAddress, street: e.target.value }, }));
    // }

    
    // onCityChange = (e) => {
    //     this.setState(state => ({ flatAddress: { ...state.flatAddress, city: e.target.value }, }));
    // }

    
    // onStateChange = (e) => {
    //     this.setState(state => ({ flatAddress: { ...state.flatAddress, state: e.target.value }, }));
    // }

    
    // onCountryChange = (e) => {
    //     this.setState(state => ({ flatAddress: { ...state.flatAddress, country: e.target.value }, }));
    // }

    
    // onPinChange = (e) => {
    //     this.setState(state => ({ flatAddress: { ...state.flatAddress, pin: e.target.value }, }));
    // }

    

    // onCancel = () => {
    //     //this.props.handleCancel(); 
    //     this.props.history.push('/flat');
    // }

    // onSubmit = (e) => 
    // {
    //     e.preventDefault();
    //     console.log("Submitted");
    //     alert(this.state);
    //     console.log(this.state);
    //     this.props.onSubmitFlat
    //     (
    //         {
    //             flatCost: this.state.flatCost,
    //             flatAvailability: this.state.flatAvailability,
    //             houseNo: this.state.flatAddress.houseNo,
    //             street: this.state.flatAddress.street,
    //             city: this.state.flatAddress.city,
    //             state: this.state.flatAddress.state,
    //             country: this.state.flatAddress.country,
    //             pin: this.state.flatAddress.pin,
    //         }
    //     );
        
    // }

    render() {
        return (
            <Container>
            <div>
                <form onSubmit={event => this.onSubmit(event)} >

                    <div>
                        <Box color="primary.main"> <h2> ADD FLAT DETAILS :</h2></Box>
                    </div>
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-number" label="Flat Cost" placeholder="Enter Flat Cost" 
                        value={this.state.flatCost} onChange={event => this.handleFlatChange(event,'flatCost')} />
                        </FormControl>
                        {this.displayValidationErrors('flatCost')}
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                        required id="standard-textarea" label="Flat Availability" 
                        value={this.state.flatAvailability} onChange={event => this.handleFlatChange(event,'flatAvailability')} />  
                        </FormControl>
                        {this.displayValidationErrors('flatAvailability')}
                        <br />

                    <div>
                        <Box color="primary.main"> <h2> ADDRESS DETAILS :</h2></Box>
                    </div>

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="House No"
                            value={this.state.flatAddress.houseNo} onChange={event => this.handleFlatAddressChange(event,'houseNo')} />
                    </FormControl>
                    {this.displayValidationErrors('houseNo')}
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-textarea" label="Street" placeholder="Enter street"
                            value={this.state.flatAddress.street} onChange={event => this.handleFlatAddressChange(event,'street')} />
                    </FormControl>
                    {this.displayValidationErrors('street')}
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-textarea" label="City"
                            value={this.state.flatAddress.city} onChange={event => this.handleFlatAddressChange(event,'city')} />
                    </FormControl>
                    {this.displayValidationErrors('city')}
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-textarea" label="State"
                            value={this.state.flatAddress.state} onChange={event => this.handleFlatAddressChange(event,'state')} />
                    </FormControl>
                    {this.displayValidationErrors('state')}
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-textarea" label="Country"
                            value={this.state.flatAddress.country} onChange={event => this.handleFlatAddressChange(event,'country')} />
                    </FormControl>
                    {this.displayValidationErrors('country')}
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-textarea" label="Pin Code " type="number"
                            value={this.state.flatAddress.pin} onChange={event => this.handleFlatAddressChange(event,'pin')} />
                    </FormControl>
                    {this.displayValidationErrors('pin')}
                    <br />

                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                    <Button style={style} type="submit">Add Flat</Button>
                    <Button style={style} onChange={this.onCancel}> Cancel</Button>

                </form>
                </div>
           
            </Container>
        )
    }

}
export default withRouter(AddFlatForm);

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