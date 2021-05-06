import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import AdminValidation from './AdminValidation';

class AddAdminForm extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            adminPassword: "",
           
        };
        this.validators = AdminValidation;
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

    handleAdminChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }


    onCancel = () => {
        this.props.history.push('/admin');
    }

    onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitAdmin(
            {
                adminPassword: this.state.adminPassword,
            }
        );
    }




    render() {
        return (
            <Container>
                <div>
                    <form onSubmit={event => this.onSubmit(event)} >

                        <div>
                            <Box color="primary.main"> <h2> ADD ADMIN DETAILS :</h2></Box>
                        </div>

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="Password" placeholder="Enter Flat Cost" type="password"
                                value={this.state.adminPassword} onChange={event => this.handleAdminChange(event, 'adminPassword')} />
                        </FormControl>
                        {this.displayValidationErrors('adminPassword')}
                        <br />

                        {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                        <Button style={style} type="submit">Add Admin</Button>
                        <Button style={style} onChange={this.onCancel}> Cancel</Button>

                    </form>
                </div>

            </Container>
        )
    }

}
export default withRouter(AddAdminForm);

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