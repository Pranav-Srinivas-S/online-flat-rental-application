import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import { Box,  Button,  Card,  CardActions,  CardContent, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import userimg from '../../images/usercard.jpeg';
import customerimg from '../../images/customerfb.jpg';
import paymentimg from '../../images/paymentcard.jpeg';
import productimg from '../../images/productcard.jpg';
import bgimg from '../../images/bgimg.jpg'


function HomePage() {
    const history = useHistory();
    return (
        <div>
            {/* <Header/>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.realestatewitch.com%2Fwhat-companies-offer-the-lowest-real-estate-commission-fees%2F&psig=AOvVaw1niWm58QioF8ce6SdCYnkL&ust=1620321848688000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCum8-Is_ACFQAAAAAdAAAAABAD"
                        alt="First Slide"/>
                        <Carousel.Caption>
                            <h2>Online Flat Renatal Application</h2>
                            <p>Our OFR helps you find flats of your choice!</p>
                            <Box m={5}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.cardexpert.in%2Fnobroker-rent-payment-feature-review%2F&psig=AOvVaw0vGiXshps_3KkplMdu6PTk&ust=1620322300884000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOja0Y6Js_ACFQAAAAAdAAAAABAD"
                        alt="Second Slide"/>
                        <Carousel.Caption>
                            <h2>No Brokers Involved</h2>
                            <p>Connect directly with the landlords, Get free of brokerage!</p>
                            <Box m={5}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.proptiger.com%2Fchennai%2Fapartments-flats-sale%2F2bhk&psig=AOvVaw3_3GQG_74fGC1mrK6uSXkb&ust=1620322375064000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj84rCJs_ACFQAAAAAdAAAAABAJ"
                        alt="Third Slide"/>
                        <Carousel.Caption>
                            <div class="text-dark">
                            <h2 >Customer Review</h2>
                            <p>Our OFR is rated best for finding flats of your desire! </p>
                            </div>
                            <Box m={5}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <br />
            <div style={{ backgroundImage: `url(${bgimg})` }}>
            <div>
                <Grid  container component="main" spacing={10} direction="row" justify="center" alignItems="center">
                <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>

                        <CardMedia 
                        component="img"
                        alt="Users Manager" 
                        height = '200'
                        image={userimg}
                        title = "User Sevice" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                            USER 
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions >
                            <Button 
                            center
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/user")}>
                                USER 
                            </Button>
                        </CardActions>
                </Card>
                </ Paper>
                </Grid>
                <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>

                        <CardMedia 
                        component="img"
                        alt="Customer DashBoard" 
                        height = '200'
                        image={customerimg}
                        title = "Customer Service" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                             CUSTOMER
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions >
                            <Button  
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/customer")}>
                                CUSTOMER
                            </Button>
                        </CardActions>
                </Card>
                </Paper>
                </Grid>
                </Grid>
            </div>
            <br />
            <br />
            <br />
            <div>
            <Grid  container component="main" spacing={10} direction="row" justify="center" alignItems="center">
            <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>

                        <CardMedia 
                        component="img"
                        alt="Payment DashBoard" 
                        height = '200'
                        image={productimg}
                        title = "User Sevice" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                PRODUCT
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button  
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/product")}>
                                Product
                            </Button>
                        </CardActions>

                    </CardActionArea>
                </Card>
                </Paper>
                </Grid>
                <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>

                        <CardMedia 
                        component="img"
                        alt="Payment DashBoard" 
                        height = '200'
                        image={paymentimg}
                        title = "User Sevice" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                PAYMENT
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button  
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/payment")}>
                                Payment
                            </Button>
                        </CardActions>

                    </CardActionArea>
                </Card>
                </Paper>
                </Grid>
                </Grid>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer/> */}
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

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.disabled,
      backgroundColor: 'grey'
    },
    text:{
        color:"#1597bb"
    },
  }));

export default HomePage;