import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import UserValidation from './UserValidation';
import { getUserSuccess, deleteUSer } from '../../../redux/actions/UsersActions';
import { connect } from 'react-redux';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

/************************************************************************************
     * Component: UpdateUserForm
     * Description: It is a Form to update User Details
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  03-04-2021 
 ************************************************************************************/

class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            userType: ""

        };
        this.validators = UserValidation;
        this.resetValidators();
    }

/************************************************************************************
     * Function: updateValidators
     * Description: It is used for User Validations 
     * Created By:  Ravuru Sathya Naga Sivanandana Sai Bharath
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
     * Description: It is used reset User Validations 
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
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
     * Description: It is used to display User Validation messages 
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
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
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
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
     * Function: handleUserChange
     * Description: It is used to handle User Property inputs 
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  03-05-2021 
 ************************************************************************************/


    handleUserChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    /************************************************************************************
     * Function: handleUserIdChange
     * Description: It is used to handle User Id Property inputs 
     * Created By:Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  03-05-2021 
 ************************************************************************************/ 

    onUserIdChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
    }

    /************************************************************************************
     * Function: onCancel
     * Description: It is used to navigate back from Update User Form 
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  03-05-2021 
 ************************************************************************************/
    onCancel = () => {
        this.props.history.push('/user');
    }

    /************************************************************************************
     * Function: onSubmit
     * Description: It is used to Submit Update User Form 
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  03-05-2021 
 ************************************************************************************/
    onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitUser(
            {
                userId: this.state.userId,
                userName: this.state.userName,
                password: this.state.password,
                userType: this.state.userType,
            }

        );

    }

     /************************************************************************************
     * Return: Update User Form
     * Description: It is used to display input fields for updating User Details
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  03-05-2021 
 ************************************************************************************/

    render() {
        return (
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >
                    <form onSubmit={event => this.onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>Update User Details:</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">User Id</FormLabel>
                            <TextField
                                required id="standard-number" label="User Id" type="number" placeholder="Enter USER ID"
                                value={this.state.userId} onChange={event => this.onUserIdChange(event, 'userId')}
                            />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">User Name</FormLabel>
                            <TextField
                                required id="standard-textarea" label="User Name" placeholder="Enter User Name"
                                value={this.state.userName} onChange={event => this.handleUserChange(event, 'userName')} />
                        </FormControl>
                        {this.displayValidationErrors('userName')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Password</FormLabel>
                            <TextField
                                required id="standard-textarea" label="Password" type="password" placeholder="Enter Password"
                                value={this.state.passsword} onChange={event => this.handleUserChange(event, 'password')} />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">User Type</FormLabel>
                            <RadioGroup required aria-label="User Type" name="User
                             Type" value={this.state.userType} onChange={event => this.handleUserChange(event, 'userType')}>
                                <FormControlLabel value="Admin" control={<Radio required={true} />} label="Admin" />
                                <FormControlLabel value="Tenant" control={<Radio required={true} />} label="Tenant" />
                                <FormControlLabel value="Landlord" control={<Radio required={true} />} label="Landlord" />
                            </RadioGroup>
                        </FormControl>
                        {this.displayValidationErrors('userType')}
                        <br />
                        <br />
                        <Button style={style} type="submit" className={`btn btn-primary  ${this.isFormValid() ? '' : 'disabled'}`}>Update User</Button>
                        <Button style={style} onClick={this.onCancel}>Cancel</Button>
                    </form>
                </div>
            </Container>
        )
    }

}

export default connect()(UpdateUserForm);

/************************************************************************************
   * property: style 
   * Description: It is used for Update User Form Styling
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  03-05-2021 
 ************************************************************************************/

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

/************************************************************************************
   * property: errorStyle 
   * Description: It is used for Update User Form Validation Message Styling
   * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
   * Created Date:  03-05-2021 
 ************************************************************************************/


const errorStyle = {
    color: 'red'
};
