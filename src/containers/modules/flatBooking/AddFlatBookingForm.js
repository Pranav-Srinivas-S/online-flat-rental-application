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
            
                flatCost: "",
                flatAvailability: "",
                
                    fhouseNo: "",
                    fstreet: "",
                    fcity: "",
                    fstate: "",
                    fpin: "",
                    fcountry: "",
            
                tenantName: "",
                tenantAge: "",
        
                    thouseNo: "",
                    tstreet: "",
                    tcity: "",
                    tstate: " ",
                    tpin: "",
                    tcountry: "",

             }

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
        //this.updateValidators(inputPropName, event.target.value);
    }

    handleFlatChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flat[inputPropName] = event.target.value;
        this.setState(newState);
        //this.updateValidators(inputPropName, event.target.value);
    }

    handleFlatAddressChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flat.flatAddress[inputPropName] = event.target.value;
        this.setState(newState);
        //this.updateValidators(inputPropName, event.target.value);
    }

    handleTenantChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.tenant[inputPropName] = event.target.value;
        this.setState(newState);
        //this.updateValidators(inputPropName, event.target.value);
    }

    handleTenantAddressChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.tenant.tenantAddress[inputPropName] = event.target.value;
        this.setState(newState);
        //this.updateValidators(inputPropName, event.target.value);
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
                bookingFromDate: this.state.bookingFromDate,
                bookingToDate: this.state.bookingToDate,
                flatCost: this.state.flatCost,
                flatAvailability: this.state.flatAvailability,
                fhouseNo: this.state.fhouseNo,
                fstreet: this.state.fstreet,
                fcity: this.state.fcity,
                fstate: this.state.fstate,
                fpin: this.state.fpin,
                fcountry: this.state.fcountry,
                tenantName: this.state.tenantName,
                tenantAge: this.state.tenantAge,
                thouseNo: this.state.thouseNo,
                tstreet: this.state.tstreet,
                tcity: this.state.tcity,
                tstate: this.state.tstate,
                tpin: this.state.tpin,
                tcountry: this.state.tcountry,
            }

        );

    }

    render() {
        return (
            <div>
                <Container style={{ backgroundColor: '#cfe8fc' }} >
                    <div  >
                        <form onSubmit={event => this.onSubmit(event)} >
                            <div>
                                <Box color="primary.main" p={1}> <h2>FlatBooking Details :</h2></Box>
                            </div>
                            <br />
                            <FormControl fullWidth>
                                <FormLabel component="legend">Booking From Date</FormLabel>
                                <TextField
                                    required id="date" type="date" placeholder="Enter Booking From Date"
                                    value={this.state.bookingFromDate} onChange={event => this.handleFlatBookingChange(event, 'bookingFromDate')} />
                            </FormControl>
                            {this.displayValidationErrors('bookingFromDate')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <FormLabel component="legend">Booking To Date</FormLabel>
                                <TextField
                                    required id="date" type="date" placeholder="Enter Booking To Date"
                                    value={this.state.bookingToDate} onChange={event => this.handleFlatBookingChange(event, 'bookingToDate')}
                                />
                            </FormControl>
                            {this.displayValidationErrors('bookingToDate')}
                            <br />
                            <br />
                            <div>
                                <Box color="primary.main"> <h2>Flat Details :</h2></Box>
                            </div>
                            <FormControl fullWidth >
                                <TextField
                                    required id="standard-textarea" label="flat Cost" placeholder="Enter flat Cost"
                                    value={this.state.flatCost} onChange={event => this.handleFlatBookingChange(event, 'flatCost')} />
                            </FormControl>
                            {this.displayValidationErrors('flatCost')}
                            <FormControl fullWidth >
                                <TextField
                                    required id="standard-textarea" label="flat Availability" placeholder="Enter flat Availability"
                                    value={this.state.flatAvailability} onChange={event => this.handleFlatBookingChange(event, 'flatAvailability')} />
                            </FormControl>
                            {this.displayValidationErrors('flatAvailability')}
                            <FormControl fullWidth >
                                <TextField
                                    required id="standard-textarea" label="House Number" placeholder="Enter House Number"
                                    value={this.state.fhouseNo} onChange={event => this.handleFlatBookingChange(event, 'fhouseNo')} />
                            </FormControl>
                            {this.displayValidationErrors('fhouseNo')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="Street" placeholder="Enter Street"
                                    value={this.state.fstreet} onChange={event => this.handleFlatBookingChange(event, 'fstreet')} />
                            </FormControl>
                            {this.displayValidationErrors('fstreet')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="City" placeholder="Enter City"
                                    value={this.state.fcity} onChange={event => this.handleFlatBookingChange(event, 'fcity')} />
                            </FormControl>
                            {this.displayValidationErrors('fcity')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="State" placeholder="Enter State"
                                    value={this.state.fstate} onChange={event => this.handleFlatBookingChange(event, 'fstate')} />
                            </FormControl>
                            {this.displayValidationErrors('fstate')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <FormLabel component="legend">Pin Code</FormLabel>
                                <TextField
                                    required id="standard-number" label="Pin Code" type="number" placeholder="Enter Pin Code"
                                    value={this.state.fpin} onChange={event => this.handleFlatBookingChange(event, 'fpin')}
                                />
                            </FormControl>
                            {this.displayValidationErrors('fpin')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="Country" placeholder="Enter Country"
                                    value={this.state.fcountry} onChange={event => this.handleFlatBookingChange(event, 'fcountry')} />
                            </FormControl>
                            {this.displayValidationErrors('fcountry')}
                            <br />
                            <br />
                            <div>
                                <Box color="primary.main"> <h2>Tenant Details :</h2></Box>
                            </div>
                            <FormControl fullWidth >
                                <TextField
                                    required id="standard-textarea" label="Tenant Name" placeholder="Enter Tenant Name"
                                    value={this.state.tenantName} onChange={event => this.handleFlatBookingChange(event, 'tenantName')} />
                            </FormControl>
                            {this.displayValidationErrors('tenantName')}
                            <FormControl fullWidth >
                                <TextField
                                    required id="standard-number" label="Tenant Age" placeholder="Enter Tenant Age" type="number"
                                    value={this.state.tenantAge} onChange={event => this.handleFlatBookingChange(event, 'tenantAge')} />
                            </FormControl>
                            {this.displayValidationErrors('tenantAge')}
                            <FormControl fullWidth >
                                <TextField
                                    required id="standard-textarea" label="House Number" placeholder="Enter House Number"
                                    value={this.state.thouseNo} onChange={event => this.handleFlatBookingChange(event, 'thouseNo')} />
                            </FormControl>
                            {this.displayValidationErrors('thouseNo')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="Street" placeholder="Enter Street"
                                    value={this.state.tstreet} onChange={event => this.handleFlatBookingChange(event, 'tstreet')} />
                            </FormControl>
                            {this.displayValidationErrors('tstreet')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="City" placeholder="Enter City"
                                    value={this.state.tcity} onChange={event => this.handleFlatBookingChange(event, 'tcity')} />
                            </FormControl>
                            {this.displayValidationErrors('tcity')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="State" placeholder="Enter State"
                                    value={this.state.tstate} onChange={event => this.handleFlatBookingChange(event, 'tstate')} />
                            </FormControl>
                            {this.displayValidationErrors('tstate')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <FormLabel component="legend">Pin Code</FormLabel>
                                <TextField
                                    required id="standard-number" label="Pin Code" type="number" placeholder="Enter Pin Code"
                                    value={this.state.tpin} onChange={event => this.handleFlatBookingChange(event, 'tpin')}
                                />
                            </FormControl>
                            {this.displayValidationErrors('tpin')}
                            <br />
                            <br />
                            <FormControl fullWidth>
                                <TextField
                                    required id="standard-textarea" label="Country" placeholder="Enter Country"
                                    value={this.state.tcountry} onChange={event => this.handleFlatBookingChange(event, 'tcountry')} />
                            </FormControl>
                            {this.displayValidationErrors('tcountry')}
                            <br />
                            <br />

                            <Button style={style} type="submit" className={`btn btn-primary  ${this.isFormValid() ? '' : 'disabled'}`}>Add FlatBooking</Button>
                            <Button style={style} onClick={this.onCancel}>Cancel</Button>
                        </form>
                    </div>
                </Container>
            </div>
        )
    }

}
export default withRouter(AddFlatBookingForm);

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