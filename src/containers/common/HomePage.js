import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useHistory } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import userimg from '../../images/userimg.jpg';
import tenantimg from '../../images/tenantimg.png';
import landlordimg from '../../images/landlordimg.jpg';
import flatimg from '../../images/flatimg.jpg';
import flatbookingimg from '../../images/flatbookingimg.jpg';
import background from '../../images/homepageimg.jpg';

/************************************************************************************
   * Component: HomePage
   * Description: It is the Home Page for our Application
   * Created By: PRANAV SRINIVAS S
   * Created Date:  05-05-2021 
 ************************************************************************************/

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
                <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/admin")}>
                    Admin</button></center>
                </p>
                {/* <h1><center>Users</center></h1> */}

                <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/user")}>
                    Users</button></center>
                </p>

                <p> <center><button variant="default" class="btn btn-warning" onClick={() => history.push("/tenant")}>
                    Tenant</button></center>
                </p>
            <div style={{ 
      backgroundImage: `url(${background})` 
    }}>
                <br /><br />
                <br /><br />

                <h1><center>Admin</center></h1>

                <br />
                <div>
                    <Grid container component="main" spacing={10} direction="row" justify="center" alignItems="center">
                        <Grid item md={8} >
                            <Paper >
                                <Card  >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Users MOdule"
                                            height='300'
                                            image={userimg}
                                            title="User Sevice"
                                            onClick={() => history.push("/user")} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                USER
                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ Paper>
                        </Grid>
                    </Grid>
                </div>

                <br />

                <div>
                    <Grid container component="main" spacing={10} direction="row" justify="center" alignItems="center">

                        <Grid item md={8} >
                            <Paper >
                                <Card  >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Tenant Module"
                                            height='300'
                                            image={tenantimg}
                                            title="Tenant Sevice"
                                            onClick={() => history.push("/tenant")} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                TENANT
        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ Paper>
                        </Grid>
                    </Grid>
                </div>

                <br />

                <div>
                    <Grid container component="main" spacing={10} direction="row" justify="center" alignItems="center">

                        <Grid item md={8} >
                            <Paper >
                                <Card  >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Landlord Module"
                                            height='300'
                                            image={landlordimg}
                                            title="Landlord Sevice"
                                            onClick={() => history.push("/landlord")} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                LANDLORD
        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ Paper>
                        </Grid>
                    </Grid>
                </div>

                <br />
                <div>
                    <Grid container component="main" spacing={10} direction="row" justify="center" alignItems="center">

                        <Grid item md={8} >
                            <Paper >
                                <Card  >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Flat Module"
                                            height='300'
                                            image={flatimg}
                                            title="Flat Sevice"
                                            onClick={() => history.push("/flat")} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                FLAT
        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ Paper>
                        </Grid>
                    </Grid>
                </div>
                <br />

                <div>
                    <Grid container component="main" spacing={10} direction="row" justify="center" alignItems="center">

                        <Grid item md={8} >
                            <Paper >
                                <Card  >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="FlatBooking Module"
                                            height='300'
                                            image={flatbookingimg}
                                            title="FlatBooking Sevice"
                                            onClick={() => history.push("/flatBooking")} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                FLAT BOOKING
        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ Paper>
                        </Grid>
                    </Grid>
                </div>
                <br />

            </div>
            <br />
            <br />
            <br />
            <Footer />
        </div>
        </div>
    )
}

export default HomePage;