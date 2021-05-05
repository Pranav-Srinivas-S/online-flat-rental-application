import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { validateLoginSuccess } from '../../redux/actions/LoginActions';

const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const[user, setUser] = useState({
        
            userId: 0,
            userName: 'name',
            password: ''
        
    });

    //const {userId, userName, password} = user;

    const[message, setMessage] = useState({
        message: ''
    })

    useEffect(() => {
        validateLogin();
    }, [])

    const validateLogin = async (user = {
        userId : '',
        userName : '',
        password : ''
    }) => {
        let users = {
            user:{
                userId : user.userId,
                userName : user.userName,
                password : user.password
            }
        }
        console.log("this is validateLogin()", users);
        const result = await axios.patch(`http://localhost:9191/api/ofr/validate-login`, user)
        setMessage(result.data);
        if(message === "Login Successful!")
            history.push('/homepage');
        else
        {
            alert(message);
            history.push('/');
        } 
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("this is onSubmit()", user);
        validateLogin(user);
    }

    const handleUserIdChange = (event) => {
        setUser((state) => ({
          ...state.user,
          userId : event.target.value
        }));
      };

      const handleUserNameChange = (event) => {
        setUser((state) => ({
          ...state.user,
          userName : event.target.value
        }));
      };

      const handlePasswordChange = (event) => {
        setUser((state) => ({
          ...state.user,
          password : event.target.value
        }));
      };

    // const handleInputChange = (e) => {
    //     setUser({...user,[e.target.name]:e.target.value});
    // }


    return (

        <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >

                    <form onSubmit={event => onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>User Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-number" label="User ID" placeholder="Enter User ID" type="number"
                                value={user.userId} onChange={handleUserIdChange} />
                        </FormControl>
                        <br />
                        <br />

                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="User Name" placeholder="Enter User Name"
                                value={user.userName} onChange={handleUserNameChange} />
                        </FormControl>
                        <br />
                        <br />
                        
                        <FormControl fullWidth >
                            <TextField
                            type="password"
                                required id="standard-textarea" label="Password" placeholder="Enter Pasword"
                                value={user.password} onChange={handlePasswordChange} />
                        </FormControl>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Button type="submit" >Login</Button>

                    </form>
                </div>
            </Container>
        
        // <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/homepage")}>
        //     Login</button></center>
        // </p>

    );
}

export default LoginPage;