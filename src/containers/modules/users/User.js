import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getUser, deleteUser } from '../../../redux/actions/UsersActions';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom"

/************************************************************************************
     * Component: User
     * Description: It is used to display specific User Detail By Id
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  01-05-2021 
 ************************************************************************************/


const User = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        userName: '',
        password: '',
        userType: '',
    });

    useEffect(() => {
        loadUser();
    }, [])

    /************************************************************************************
     * Function: loadUser
     * Description: It is used to fetch specific UserDetail using ID
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  01-05-2021 
 ************************************************************************************/

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9191/api/ofr/view-user/${userId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getUser(result.data));
        setUser(result.data);
    }

    /************************************************************************************
     * Function: deleteUserById
     * Description: It is used to delete User Detail using ID
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  01-05-2021 
 ************************************************************************************/
    const deleteUserById = async (userId) => {
        await axios.delete(`http://localhost:9191/api/ofr/remove-user/${userId}`).catch((err) => { console.log("Error", err); });
        dispatch(deleteUser(userId));
        alert("Deleted Successfully");
        history.push('/user')
    }

    /************************************************************************************
     * Return: Specific User Details
     * Description: It is used to display User Detail using ID
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  01-05-2021 
 ************************************************************************************/

    return (
        <div >
            <h1 class="display-4  bg-primary text-white"> User Detail </h1>
            <ul class="list-group-item">
                <li class="list-group-item list-group-item-info"> <h3>User Id : {user.userId}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>User Name : {user.userName}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>Password : {user.password}</h3> </li>
                <li class="list-group-item list-group-item-info"><h3>User Type : {user.userType}</h3> </li>
            </ul>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button style={style} onClick={() => deleteUserById(userId)}>Delete</Button>
                </Grid>
                <Grid item xs={3}>
                    <Link to={`/user`}><Button style={style} >Back To Home</Button ></Link>
                </Grid>
            </Grid>

        </div>
    )
}

/************************************************************************************
     * property: style 
     * Description: It is used for User Detail Styling
     * Created By: Ravuru Sathya Naga Sivanandana Sai Bharath
     * Created Date:  01-05-2021 
 ************************************************************************************/


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

export default connect()(User);
