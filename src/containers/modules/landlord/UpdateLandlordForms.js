import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getLandlord, deleteLandlord } from '../../../redux/actions/LandlordActions';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LandlordValidation from './LandlordValidation';

const UpdateLandlordForms = () => {
    const { landlordId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [landlord, setLandlord] = useState({
        landlordName: '',
        landlordAge: '',
        
    });

    useEffect(() => {
        loadLandlord();
        alert ("Called");
        resetValidators();
        loadLandlord();
    }, [])

    const loadLandlord = async () => {
        const result = await axios.get(`http://localhost:9191/api/ofr/view-landlord/${landlordId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getLandlord(result.data));
        setLandlord(result.data);
    }

    const  updateValidators = (fieldName, value) => {
        LandlordValidation[fieldName].errors = [];
        LandlordValidation[fieldName].state = value;
        LandlordValidation[fieldName].valid = true;
        LandlordValidation[fieldName].rules.forEach((rule) => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    LandlordValidation[fieldName].errors.push(rule.message);
                    LandlordValidation[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    LandlordValidation[fieldName].errors.push(rule.message);
                    LandlordValidation[fieldName].valid = false;
                }
            }
        });
    }

    const resetValidators = () => {
        Object.keys(LandlordValidation).forEach((fieldName) => {
            LandlordValidation[fieldName].errors = [];
            LandlordValidation[fieldName].state = '';
            LandlordValidation[fieldName].valid = false;
        });
    }

    const displayValidationErrors = (fieldName) => {
        const validator = LandlordValidation[fieldName];
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
        Object.keys(LandlordValidation).forEach((field) => {
            if (!LandlordValidation[field].valid) {
                status = false;
            }
        });
        return status;
    }

    const handleLandlordChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        updateValidators(inputPropName, event.target.value);
    }

    

    const onLandlordIdChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
    }

    const onCancel = () => {
        history.push('/landlord');
    }

    const onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitLandlord(
            {
                landlordId: this.state.landlordId,
                landlordName: this.state.landlordName,
                landlordAge: this.state.landlordAge,
                
            }
        );
    }

        return (
            <div>
    
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >
                    <form onSubmit={event => onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>Landlord Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Landlord ID</FormLabel>
                            <TextField
                                required id="standard-number" label="Landlord ID" type="number" placeholder="Enter Landlord ID"
                                value={landlord.landlordId} onChange={event => onLandlordIdChange(event, 'landlordId')}
                            />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Landlord Name</FormLabel>
                            <TextField
                                required id="standard-textarea" label="Landlord Name" placeholder="Enter Landlord Name"
                                value={landlord.landlordName} onChange={event => handleLandlordChange(event, 'landlordName')} />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Landlord Age</FormLabel>
                            <TextField
                                required id="standard-number" label="Landlord Age" type="number" placeholder="Enter Landlord Age"
                                value={landlord.landlordAge} onChange={event => handleLandlordChange(event, 'landlordAge')}
                                />
                        </FormControl>
                        {displayValidationErrors('landlordAge')}
                        <br />
                        <br />
                        <Button  type="submit" className={`btn btn-primary ${isFormValid() ? '' : 'disabled'}`}>Update Landlord</Button>
                        <Button  onClick={onCancel()}>Cancel</Button>
                    </form>
                </div>
            </Container>
            </div>
        )
    

}

export default connect()(UpdateLandlordForms);