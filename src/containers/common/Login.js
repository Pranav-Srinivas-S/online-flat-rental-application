import React from "react";
import {Link} from 'react-router-dom';
import store from '../../redux/store/ConfigureStore';
import { validateLogin } from "../../redux/actions/LoginActions";
import msg from "./message";
import axios from "axios";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
                userId: "",
                userName: "",
                password: ""
        }
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({...this.state,[nam]:val});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // store.dispatch(validateLogin(this.state.user));
        // setTimeout(this.checkLogin,1000);
        //this.checkLogin();
        console.log(this.state);
        this.validateLogin(this.state);
        // this.props.onSubmitLogin(
        //     {
        //         userId : this.state.user.userId,
        //         userName : this.state.user.userName,
        //         password : this.state.user.password
        //     }
        // );
    }

    validateLogin = async (User) => {
        console.log("this is validateLogin()", User);
        let result = await axios.patch(`http://localhost:9191/api/ofr/validate-login`, User)
        console.log("result data", result.data);
        if(result.data === "Login Successful!")
            this.props.history.push('/homepage');
        else
        {
            alert("Login Failed! User Name and Password does not Match");
            this.props.history.push('/');
        }
    }

    checkLogin=()=>{
        console.log("checklogin");
        console.log(store.getState());
        let message =  msg.message;
        if(message === "Login Successful!")
        this.props.history.push('/homepage');
        else
        {
            alert(message);
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div>  
                <form onSubmit={(event)=>this.handleSubmit(event)} >
                        <div>
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
                        <Button type="submit" >Login</Button>

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
        );
    };
}