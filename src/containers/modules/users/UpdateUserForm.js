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
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';

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

    handleUserChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    onUserIdChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
    }

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

    render() {
        return (
            <div>
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
                        <Link to={`/user`}><Button style={style} >Cancel</Button></Link>
                    </form>
                </div>
            </Container>
            </div>
        )
    }

}

export default connect()(UpdateUserForm);

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