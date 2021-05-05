import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getTenant, deleteTenant } from '../../../redux/actions/TenantActions';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TenantValidation from './TenantValidation';

const UpdateTenantForms = () => {
    const { tenantId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [tenant, setTenant] = useState({
        tenantName: '',
        tenantAge: '',
        tenantAddress: {
            houseNo: '',
            street: '',
            city: '',
            state: '',
            pin: '',
            country: '',
        }
    });

    useEffect(() => {
        loadTenant();
        alert ("Called");
        resetValidators();
        loadTenant();
    }, [])

    const loadTenant = async () => {
        const result = await axios.get(`http://localhost:9191/api/ofr/view-tenant/${tenantId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getTenant(result.data));
        setTenant(result.data);
    }

    const  updateValidators = (fieldName, value) => {
        TenantValidation[fieldName].errors = [];
        TenantValidation[fieldName].state = value;
        TenantValidation[fieldName].valid = true;
        TenantValidation[fieldName].rules.forEach((rule) => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    TenantValidation[fieldName].errors.push(rule.message);
                    TenantValidation[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    TenantValidation[fieldName].errors.push(rule.message);
                    TenantValidation[fieldName].valid = false;
                }
            }
        });
    }

    const resetValidators = () => {
        Object.keys(TenantValidation).forEach((fieldName) => {
            TenantValidation[fieldName].errors = [];
            TenantValidation[fieldName].state = '';
            TenantValidation[fieldName].valid = false;
        });
    }

    const displayValidationErrors = (fieldName) => {
        const validator = TenantValidation[fieldName];
        const result = '';
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
                return <span key={index}>* {info}</span>;
            });

            return (
                <div className="col s12 row">
                    {errors}
                </div>
            );
        }
        return result;
    }

    const isFormValid = () => {
        let status = true;
        Object.keys(TenantValidation).forEach((field) => {
            if (!TenantValidation[field].valid) {
                status = false;
            }
        });
        return status;
    }

    const handleTenantChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        updateValidators(inputPropName, event.target.value);
    }

    const handleTenantAddressChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState.tenantAddress[inputPropName] = event.target.value;
        this.setState(newState);
        updateValidators(inputPropName, event.target.value);
    }

    const onTenantIdChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
    }

    const onCancel = () => {
        history.push('/tenant');
    }

    const onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitTenant(
            {
                tenantId: this.state.tenantId,
                tenantName: this.state.tenantName,
                tenantAge: this.state.tenantAge,
                houseNo: this.state.tenantAddress.houseNo,
                street: this.state.tenantAddress.street,
                city: this.state.tenantAddress.city,
                state: this.state.tenantAddress.state,
                pin: this.state.tenantAddress.pin,
                country: this.state.tenantAddress.country,
            }
        );
    }

        return (
            <div>
    
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >
                    <form onSubmit={event => onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>Tenant Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Tenant ID</FormLabel>
                            <TextField
                                required id="standard-number" label="Tenant ID" type="number" placeholder="Enter Tenant ID"
                                value={tenant.tenantId} onChange={event => onTenantIdChange(event, 'tenantId')}
                            />
                        </FormControl>
                        displayValidationErrors('tenantAge')
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Tenant Name</FormLabel>
                            <TextField
                                required id="standard-textarea" label="Tenant Name" placeholder="Enter Tenant Name"
                                value={tenant.tenantName} onChange={event => handleTenantChange(event, 'tenantName')} />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Tenant Age</FormLabel>
                            <TextField
                                required id="standard-number" label="Tenant Age" type="number" placeholder="Enter Tenant Age"
                                value={tenant.tenantAge} onChange={event => handleTenantChange(event, 'tenantAge')}
                                />
                        </FormControl>
                        {displayValidationErrors('tenantAge')}
                        <br />
                        <br />
                        <div>
                            <Box color="primary.main"> <h2>Tenant Address :</h2></Box>
                        </div>
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="House Number" placeholder="Enter House Number"
                                value={tenant.tenantAddress.houseNo} onChange={event => handleTenantAddressChange(event, 'houseNo')} />
                        </FormControl>
                        {displayValidationErrors('houseNo')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="Street" placeholder="Enter Street"
                                value={tenant.tenantAddress.street} onChange={event => handleTenantAddressChange(event, 'street')} />
                        </FormControl>
                        {displayValidationErrors('street')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="City" placeholder="Enter City"
                                value={tenant.tenantAddress.city} onChange={event => handleTenantAddressChange(event, 'city')} />
                        </FormControl>
                        {displayValidationErrors('city')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="State" placeholder="Enter State"
                                value={tenant.tenantAddress.state} onChange={event => handleTenantAddressChange(event, 'state')} />
                        </FormControl>
                        {displayValidationErrors('state')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Pin Code</FormLabel>
                            <TextField
                                required id="standard-number" label="Pin Code" type="number" placeholder="Enter Pin Code"
                                value={tenant.tenantAddress.pin} onChange={event => handleTenantAddressChange(event, 'pin')}
                                />
                        </FormControl>
                        {displayValidationErrors('pin')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="Country" placeholder="Enter Country"
                                value={tenant.tenantAddress.country} onChange={event => handleTenantAddressChange(event, 'country')} />
                        </FormControl>
                        {displayValidationErrors('country')}
                        <br />
                        <br />
                        <Button  type="submit" className={`btn btn-primary btn-block ${isFormValid() ? '' : 'disabled'}`}>Update Tenant</Button>
                        <Button  onClick={onCancel()}>Cancel</Button>
                    </form>
                </div>
            </Container>
            </div>
        )
    

}

export default connect()(UpdateTenantForms);