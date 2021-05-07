import React from "react";
import axios from "axios";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import Footer from './Footer';
import { Redirect } from "react-router";
import background from '../../images/loginimage.jpg';

/************************************************************************************
   * Component: Login
   * Description: It is Login Page for our Application
   * Created By: PRANAV SRINIVAS S
   *             RAVURU SATHYA NAGA SIVANANDANA SAI BHARATH
   * Created Date:  05-05-2021 
 ************************************************************************************/

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userName: "",
            password: ""
        }
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ ...this.state, [nam]: val });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.validateLogin(this.state);
    }

    validateLogin = async (User) => {
        console.log("this is validateLogin()", User);
        let result = await axios.patch(`http://localhost:9191/api/ofr/validate-login`, User)
        console.log("result data", result.data);
        if (result.data === "Login Successful!")
            this.props.history.push('/homepage');
        else {
            alert("Login Failed! Invalid Details");
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>

                <div style={{
                    backgroundImage: `url(${background})`
                }}>
                    <br /><br />
                    <br /><br />

                    <div
                        className="container "
                    >
                        <br />
                        <center>
                            <h2 class="p-2 mb-3 bg-info text-light" >LOGIN PAGE</h2>

                        </center>
                        <br />
                        <br />
                        <form onSubmit={(event) => this.handleSubmit(event)} >
                            <div id="error">{this.state.error}

                            </div>

                            <div className="form-group">
                                <center>

                                    <input
                                        class="text-warning" className="row input-field row w-25 p-2 "
                                        placeholder="Enter User ID"
                                        name="userId"
                                        type="number"
                                        onChange={event => this.handleChange(event)} />
                                </center>
                            </div>
                            <br />

                            <div className="form-group">
                                <center>
                                    <input
                                        className="row input-field row w-25 p-2"
                                        placeholder="Enter User Name"
                                        name="userName"
                                        type="text"
                                        onChange={event => this.handleChange(event)} />
                                </center>
                            </div>
                            <br />
                            <div className="form-group">
                                <center>
                                    <input
                                        className="row input-field row w-25 p-2"
                                        placeholder="Enter Password"
                                        name="password"
                                        type="password"
                                        onChange={event => this.handleChange(event)} />
                                </center>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div>
                                <div className="row  ">

                                    <div class="col">
                                        <button class="btn btn-danger form-control  btn-block" type="button" onClick={() => this.props.history.push('/update-password')}>Update Password</button></div>

                                    <br />
                                    <div class="col">
                                        <button class="btn btn-success form-control  btn-block" routerLink='/login'>LOGIN</button></div>

                                    <br />
                                    <div class="col">
                                        <button class="btn btn-warning form-control  btn-block" type="button" onClick={() => this.props.history.push('/add-user')} >SignUp</button></div>
                                </div>
                            </div>
                            <br/> <br/> <br/> <br/>
                            <div className="row">
                                <div className="input-field col s12 signup-btn">
                                </div>
                                <br /><br />
                                <br /><br />
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>

        );
    };

}
