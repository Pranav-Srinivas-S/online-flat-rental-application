import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TenantValidation from './TenantValidation';
import { withRouter } from "react-router-dom";

 class AddTenantForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            tenantName: "",
            tenantAge: "",
            tenantAddress: {
                houseNo: "",
                street: "",
                city: "",
                state: "",
                pin: "",
                country: "",
            }
        };
        this.validators = TenantValidation;
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

    handleTenantChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.tenant[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    handleTenantAddressChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.tenantAddress[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    onTenantNameChange = (e) => {
        this.setState({ type: e.target.value });
    }

    onTenantAgeChange = (e) => {
        this.setState({ status: e.target.value });
    }

    onCancel = () => {
        this.props.history.push('/tenant');
    }

    onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitTenant(
            {
                tenantName : this.state.tenantName,
                tenantAge : this.state.tenantAge,
                houseNo : this.state.houseNo,
                street : this.state.street,
                city : this.state.city,
                state : this.state.state,
                pin : this.state.pin,
                country : this.state.country,
            }

        );
 
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >

                    <form onSubmit={event => this.onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>Tenant Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Tenant Name</FormLabel>
                            <TextField
                                required id="standard-textarea" label="Tenant Name" placeholder="Enter Tenant Name"
                                value={this.state.tenantName} onChange={event => this.handleTenantChange(event, 'tenantName')} /> 
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Tenant Age</FormLabel>
                            <TextField
                                required id="standard-number" label="Tenant Age" type="number" placeholder="Enter Tenant Age"
                                value={this.state.tenantAge} onChange={event => this.handleTenantChange(event, 'tenantAge')}
                                InputLabelProps={{
                                    shrink: true
                                }} />
                        </FormControl>
                        {this.displayValidationErrors('tenantAge')}
                        <br />
                        <br />
                        <div>
                            <Box color="primary.main"> <h2>Tenant Address :</h2></Box>
                        </div>
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="House Number" placeholder="Enter House Number"
                                value={this.state.tenantAddress.houseNo} onChange={event => this.handleTenantAddressChange(event, 'houseNo')} />
                        </FormControl>
                        {this.displayValidationErrors('houseNo')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="Street" placeholder="Enter Street"
                                value={this.state.tenantAddress.street} onChange={event => this.handleTenantAddressChange(event, 'street')} />
                        </FormControl>
                        {this.displayValidationErrors('street')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="City" placeholder="Enter City"
                                value={this.state.tenantAddress.city} onChange={event => this.handleTenantAddressChange(event, 'city')} />
                        </FormControl>
                        {this.displayValidationErrors('city')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="State" placeholder="Enter State"
                                value={this.state.tenantAddress.state} onChange={event => this.handleTenantAddressChange(event, 'state')} />
                        </FormControl>
                        {this.displayValidationErrors('state')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Pin Code</FormLabel>
                            <TextField
                                required id="standard-number" label="Pin Code" type="number" placeholder="Enter Pin Code"
                                value={this.state.tenantAddress.pin} onChange={event => this.handleTenantChange(event, 'pin')}
                                InputLabelProps={{
                                    shrink: true
                                }} />
                        </FormControl>
                        {this.displayValidationErrors('pin')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <TextField
                                required id="standard-textarea" label="Country" placeholder="Enter Country"
                                value={this.state.tenantAddress.country} onChange={event => this.handleTenantAddressChange(event, 'country')} />
                        </FormControl>
                        {this.displayValidationErrors('country')}
                        <br />
                        <br />
                        <Button style={style} type="submit" >Add Tenant</Button>
                        <Button style={style} onClick={this.onCancel}>Cancel</Button>
                    </form>
                </div>
            </Container>
        )
    }

}
export default withRouter(AddTenantForm);

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