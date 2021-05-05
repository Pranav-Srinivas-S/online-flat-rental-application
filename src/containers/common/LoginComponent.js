import React from 'react';
import { validateLogin } from '../../redux/actions/LoginActions';
import Login from './Login';
import msg from "./message";

const LoginComponent = (props) => (
    <div>
        <Login 
            onSubmitLogin={(state) => {
                props.dispatch(validateLogin(state));
                    console.log("checklogin");
                    let message =  msg.message;
                    if(message === "Login Successful!")
                    this.props.history.push('/homepage');
                    else
                    {
                        alert(message);
                        this.props.history.push('/');
                    }
                }
            }
        />
    </div>
);

export default LoginComponent;