import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();
    return (
        
        <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/homepage")}>
            Login</button></center>
        </p>

    );
}

export default LoginPage;