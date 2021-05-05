import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FlatBookingValidation from './FlatBookingValidation';
import { withRouter } from "react-router-dom";

 class AddFlatBookingForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            bookingFromDate: "",
            bookingToDate: "",
            flatBookingDetails: {
                    flatCost:flatBookingData.flatCost,
                    flatAvailability:flatBookingData.flatAvailability,
                houseNo: "",
                street: "",
                city: "",
                state: "",
                pin: "",
                country: "",
            }
        };
        this.validators = FlatBookingValidation;
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

    handleFlatBookingChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    handleflatBookingDetailsChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flatBookingDetails[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    onCancel = () => {
        this.props.history.push('/flatBooking');
    }

    onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitFlatBooking(
            {
                bookingFromDate : this.state.bookingFromDate,
                bookingToDate : this.state.bookingToDate,
                flatCost :this.state.flatCost,
                flatAvailability :this.state.flatAvailability,
                houseNo : this.state.flatBookingDetails.houseNo,
                street : this.state.flatBookingDetails.street,
                city : this.state.flatBookingDetails.city,
                state : this.state.flatBookingDetails.state,
                pin : this.state.flatBookingDetails.pin,
                country : this.state.flatBookingDetails.country,
            }

        );
 
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >
                    <form onSubmit={event => this.onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>FlatBooking Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Booing From Date</FormLabel>
                            <TextField
                                required id="standard-number" label="Booking From Date" placeholder="Enter Booking From Date"
                                value={this.state.bookingFromDate} onChange={event => this.handleFlatBookingChange(event, 'bookingFromDate')} /> 
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Booking To Dtae</FormLabel>
                            <TextField
                                required id="standard-textarea" label="Booking TO Date" type="number" placeholder="Enter Booking To Date"
                                value={this.state.bookingToDate} onChange={event => this.handleFlatBookingChange(event, 'bookingToDate')}
                                 />
                        </FormControl>
                        {this.displayValidationErrors('bookingToDate')}
                        <br />
                        <br />
                        <div>
                            <Box color="primary.main"> <h2>flat Booking Availability :</h2></Box>
                        </div>
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="House Number" placeholder="Enter House Number"
                                value={this.state.flatBookingDetails.houseNo} onChange={event => this.handleFlatBookingDetailsChange(event, 'houseNo')} />
                        </FormControl>
                        {this.displayValidationErrors('houseNo')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="Street" placeholder="Enter Street"
                                value={this.state.flatBookingDetails.street} onChange={event => this.handleFlatBookingDetailsChange(event, 'street')} />
                        </FormControl>
                        {this.displayValidationErrors('street')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="City" placeholder="Enter City"
                                value={this.state.flatBookingDetails.city} onChange={event => this.handleFlatBookingDetailsChange(event, 'city')} />
                        </FormControl>
                        {this.displayValidationErrors('city')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="State" placeholder="Enter State"
                                value={this.state.flatBookingDetails.state} onChange={event => this.handleFlatBookingDetailsChange(event, 'state')} />
                        </FormControl>
                        {this.displayValidationErrors('state')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Pin Code</FormLabel>
                            <TextField
                                required id="standard-number" label="Pin Code" type="number" placeholder="Enter Pin Code"
                                value={this.state.flatBookingDetails.pin} onChange={event => this.handleFlatBookingDetailsChange(event, 'pin')}
                                 />
                        </FormControl>
                        {this.displayValidationErrors('pin')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="Country" placeholder="Enter Country"
                                value={this.state.flatBookingDetails.country} onChange={event => this.handleFlatBookingDetailsChange(event, 'country')} />
                        </FormControl>
                        {this.displayValidationErrors('country')}
                        <br />
                        <br />
                        <Button style={style} type="submit" className={`btn btn-primary btn-block ${this.isFormValid() ? '' : 'disabled'}`}>Add FlatBooking</Button>
                        <Button style={style} onClick={this.onCancel}>Cancel</Button>
                    </form>
                </div>
            </Container>
        )
    }

}
export default withRouter(AddFlatBookingForm);

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