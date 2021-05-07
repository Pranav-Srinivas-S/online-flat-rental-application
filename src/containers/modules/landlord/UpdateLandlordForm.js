import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LandlordValidation from './LandlordValidation';
import { getLandlord, deleteLandlord } from '../../../redux/actions/LandlordActions';
import { connect } from 'react-redux';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

/************************************************************************************
     * Component: UpdateLandlordForm
     * Description: It is a Form to update Landlord Details
     * Created By: NITHISHA KA 
     * Created Date:  03-04-2021 
 ************************************************************************************/

class UpdateLandlordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            landlordId: "",
            landlordName: "",
            landlordAge: "",
            flatList:
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
                
                }
            
        };
        this.validators = LandlordValidation;
        this.resetValidators();
    }
    
/************************************************************************************
     * Function: updateValidators
     * Description: It is used for Landlord Validations 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/


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
    
    /************************************************************************************
     * Function: resetValidators
     * Description: It is used reset Landlord Validations 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/


    resetValidators = () => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = '';
            this.validators[fieldName].valid = false;
        });
    }
    
    /************************************************************************************
     * Function: displayValidators
     * Description: It is used to display Landlord Validation messages 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/


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
    

    /************************************************************************************
     * Function: isFormValid
     * Description: It is used to validate if Form is Filled or not 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/


    isFormValid = () => {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
            if (!this.validators[field].valid) {
                status = false;
            }
        });
        return status;
    }
     /************************************************************************************
     * Function: handleLandlordChange
     * Description: It is used to handle Landlord Property inputs 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/


    handleLandlordChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }
     /************************************************************************************
     * Function: handleFlatChange
     * Description: It is used to handle Flat Property inputs 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/

    handleFlatChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flatList[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    /************************************************************************************
     * Function: handleLandlordsChange
     * Description: It is used to handle Landlord Address Property inputs 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/

    handleFlatAddressChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flatList.flatAddress[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }
    /************************************************************************************
     * Function: handleLandlordIdChange
     * Description: It is used to handle Landlord Id Property inputs 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/    


    onLandlordIdChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
    }
    /************************************************************************************
     * Function: onSubmit
     * Description: It is used to Submit Update Landlord Form 
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/


    onCancel = () => {
        this.props.history.push('/landlord');
    }

    onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitLandlord(
            {
                landlordId: this.state.landlordId,
                landlordName: this.state.landlordName,
                landlordAge: this.state.landlordAge,
                flatCost:this.state.flatList.flatCost,
                flatAvailability:this.state.flatList.flatAvailability,
                houseNo: this.state.flatList.flatAddress.houseNo,
                street: this.state.flatList.flatAddress.street,
                city: this.state.flatList.flatAddress.city,
                state: this.state.flatList.flatAddress.state,
                pin: this.state.flatList.flatAddress.pin,
                country: this.state.flatList.flatAddress.country,
            }
        );
    }
     /************************************************************************************
     * Return: Update Landlord Form
     * Description: It is used to display input fields for updating Landlord Details
     * Created By:  NITHISHA KA 
     * Created Date:  03-05-2021 
 ************************************************************************************/


    render() {
        return (
            <div>
    
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >
                    <form onSubmit={event => this.onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>Landlord Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Landlord ID</FormLabel>
                            <TextField
                                required id="standard-number" label="Landlord ID" type="number" placeholder="Enter Landlord ID"
                                value={this.state.landlordId} onChange={event => this.onLandlordIdChange(event, 'landlordId')}
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl fullWidth>
                            <FormLabel component="legend">Landlord Name</FormLabel>
                            <TextField
                                required id="standard-textarea" label="Landlord Name" placeholder="Enter Landlord Name"
                                value={this.state.landlordName} onChange={event => this.handleLandlordChange(event, 'landlordName')} />
                        </FormControl>
                        {this.displayValidationErrors('landlordName')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <FormLabel component="legend">Landlord Age</FormLabel>
                            <TextField
                                required id="standard-number" label= " Landlord Age" type="number" placeholder="Enter Landlord Age"
                                value={this.state.landlordAge} onChange={event => this.handleLandlordChange(event, 'landlordAge')}
                            />
                        </FormControl>
                        {this.displayValidationErrors('landlordAge')}
                        <br />
                        <br />
                        <div>
                            <Box color="primary.main"> <h2>Flat Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label= " Flat Cost"   type="number" placeholder="Enter Flat Cost"
                                value={this.state.flatList.flatCost} onChange={event => this.handleFlatChange(event, 'flatCost')}
                            />
                        </FormControl>
                        {this.displayValidationErrors('flatCost')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                        <FormControl fullWidth>
                            <FormLabel component="legend">Flat Availability</FormLabel>
                            <RadioGroup required aria-label="Flat Availability" name="Landlord"
                                 value={this.state.flatList.flatAvailability} onChange={event => this.handleFlatChange(event, 'flatAvailability')}>
                                <FormControlLabel value="Yes" control={<Radio required={true} />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio required={true} />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        </FormControl>
                        {this.displayValidationErrors('flatAvailability')}
                        <br />
                        <br />
                        <div>
                            <Box color="primary.main"> <h2>Flat Address :</h2></Box>
                        </div>
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-number" label="House Number" type="number" placeholder="Enter House Number"
                                value={this.state.flatList.flatAddress.houseNo} onChange={event => this.handleFlatAddressChange(event, 'houseNo')} />
                        </FormControl>
                        {this.displayValidationErrors('houseNo')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="Street" placeholder="Enter Street"
                                value={this.state.flatList.flatAddress.street} onChange={event => this.handleFlatAddressChange(event, 'street')} />
                        </FormControl>
                        {this.displayValidationErrors('street')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="City" placeholder="Enter City"
                                value={this.state.flatList.flatAddress.city} onChange={event => this.handleFlatAddressChange(event, 'city')} />
                        </FormControl>
                        {this.displayValidationErrors('city')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="State" placeholder="Enter State"
                                value={this.state.flatList.flatAddress.state} onChange={event => this.handleFlatAddressChange(event, 'state')} />
                        </FormControl>
                        {this.displayValidationErrors('state')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Pin Code" type="number" placeholder="Enter Pin Code"
                                value={this.state.flatList.flatAddress.pin} onChange={event => this.handleFlatAddressChange(event, 'pin')}
                            />
                        </FormControl>
                        {this.displayValidationErrors('pin')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="Country" placeholder="Enter Country"
                                value={this.state.flatList.flatAddress.country} onChange={event => this.handleFlatAddressChange(event, 'country')} />
                        </FormControl>
                        {this.displayValidationErrors('country')}
                        <br />
                        <br />
                        <Button style={style} type="submit" className={`btn btn-primary btn-block ${this.isFormValid() ? '' : 'disabled'}`}>Update Landlord</Button>
                        <Button style={style} onClick={this.onCancel}>Cancel</Button>
                    </form>
                </div>
            </Container>
            </div>
        )
    }

}
export default connect()(UpdateLandlordForm);

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

/************************************************************************************
   * property: style 
   * Description: It is used for Update Landlord Form Styling
   * Created By: NITHISHA KA 
   * Created Date:  03-05-2021 
 *************************************************************************************/


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

/************************************************************************************
   * property: errorStyle 
   * Description: It is used for UpdateLandlord Form Validation Message Styling
   * Created By:  NITHISHA KA 
   * Created Date:  03-05-2021 
 *************************************************************************************/


const errorStyle = {
    color: 'red'
};