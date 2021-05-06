import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useHistory } from 'react-router-dom';



function HomePage() {
    const history = useHistory();
    return (
        <div>
            <Header />
            <div>
            <br/>
            <br/>
                <h1><center>Login</center></h1>
                <h1><center>Sign up</center></h1>
                <h1><center>Admin</center></h1>
                {/* <h1><center>Users</center></h1> */}

                <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/user")}>
                    Users</button></center>
                </p>

                <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/tenant")}>
                    Tenant</button></center>
                </p>

                <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/landlord")}>
                    Landlord</button></center>
                </p>
                <h1><center>Flat</center></h1>
                <h1><center>Flat Booking</center></h1>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    )
}

export default HomePage;