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
            alert("Login Failed! User Name and Password does not Match");
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
                <br/>
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
                    <br/>
                    
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
                    <br/>
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
                    <br/>
                    <br/>
                
                    <div>


                        

                        <div className="row  ">

                        
                            {/* <div class="col-sm-12 text-center" className="input-field col s12 signup-btn">
                                <center><button className="btn btn-warning" type="submit">Login</button></center>
                            </div> */}
                        
                        
                        <div class="col">
        <button class="btn btn-danger form-control  btn-block" type="button" onClick={() => this.props.history.push('/update-password')}>Update Password</button></div>

                    
                    <br/>

                    
                    <div class="col">
        <button class="btn btn-warning form-control  btn-block" routerLink='/login'>LOGIN</button></div>
                    
                    {/* <div className="row">
                            <div className="input-field col s12 signup-btn">
                                <center><button className="btn btn-danger" type="button" onClick={() => this.props.history.push('/update-password')}>Update Password</button></center>
                            </div>
                        </div> */}
                        <br/>
                        <div class="col">
        <button class="btn btn-success form-control  btn-block" type="button" onClick={() => this.props.history.push('/add-user')} >SignUp</button></div>
        </div>
        </div>
     
                        
                        
                    {/* <div className="row">
                        <div className="input-field col s12 signup-btn">

                            <center><button type="button" className="btn btn-success" onClick={() => this.props.history.push('/add-user')} >SignUp</button></center>

                        </div>
                    </div> */}
                    <div className="row">
                        <div className="input-field col s12 signup-btn">
                        </div>
                        <br/><br/>
                        <br/><br/>
                    </div>
                    
                    {/* <div>
                            <Box color="primary.main" p={1}> <h2>Login :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-number" label="User ID" placeholder="Enter User ID" type="number"
                                name="userId" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="User Name" placeholder="Enter User Name"
                                name="userName" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <br />
                        <br />
                        
                        <FormControl fullWidth >
                            <TextField
                            type="password"
                                required id="standard-textarea" label="Password" placeholder="Enter Pasword"
                                name="password" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Button type="submit" >Login</Button> */}

                </form>
                {/* <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <div id="error">{this.state.error}</div>
                    <input type="number" name="userId" onChange={event=>this.handleChange(event)}/>
                    <input type="text" name="userName" onChange={event=>this.handleChange(event)}/>
                    <input type="password" name="password" onChange={event=>this.handleChange(event)}/>
                        <button type="submit">Login</button>  
                    OR
                    <Link to="/sign-up">
                        <button type="button">Sign UP</button>
                    </Link>            
                </form> */}
                </div>
                <Footer />
            </div>
            </div>
            
        );
    };
    
}