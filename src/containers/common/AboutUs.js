import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { CardContent } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.disabled,
        backgroundColor: '#334443'
    },
}));

export default function AboutUs() {

    const classes = useStyles();

    return (

        <div>
            <Header />
            <div className="container">
                <div className="py-4">
                    <h1 className="display-4 text-info">About Us</h1>
                    <p className="lead">
                        Welcome to Online Flat Rental Application, OFR!
                </p>

                    <p className="lead">
                        OFR is a disruptive real-estate platform that makes it possible to buy/sell/rent a house without paying any brokerage.
                </p>

                    <p className="lead">
                        OFR was started because all of us believed that paying hefty brokerage can not be the only option to find a new home. As tenants, we have been paying these brokerages year on year without seeing any advantage of the broker. The only reason he existed was that there was a huge information asymmetry in the market. OFR is a platform that removes this information asymmetry and provides a marketplace for free exchange of this information that used to cost 1-2 months of rent as brokerage.
                </p>

                    <p className="lead">
                        We have done 2 things to help you find that perfect home:
                    </p>
                    <ul>

                        <li>
                            <p className="lead">
                                Firstly, we have painstakingly verified each listing and made sure that these are direct owners or shared accommodation parties and there are no middlemen or brokers. We use lot of heuristics and techniques to ensure that you get a totally broker free list.
                    </p>
                        </li>

                        <li>
                            <p className="lead">
                                Secondly, we have also tried to ensure that maximum information is available to you in as easy to use format. This ensures that you get a very good idea of the property even before you visit it. Thus, you can shortlist flats sitting at the comfort of your home without actually traveling all the good and bad properties. This saves your time and effort and with a quick shortlist of 4-5 properties you can actually get a house in few hours!
                                If you are a landlord interested in posting your apartments to OFR, please contact us and we will help you list the property.
                    </p>
                        </li>

                    </ul>




                    <p className="lead">
                        And tenants, happy hunting and get in touch with us to let us know how else we can help!
                    </p>
                </div>
                <br/>
            </div>
            <Footer />
        </div>

        //         <div className={classes.root}>
        //             <Header />
        //             {/* <Box m={3}/> */}
        //             <Carousel fade>
        //                 <Carousel.Item>
        //                     <Card>
        //                         <CardActionArea>
        //                             <CardMedia
        //                                 component="img"
        //                                 alt="About US"
        //                                 height="400"
        //                                 image="https://blog.exitbee.com/wp-content/uploads/2016/03/about-us.jpg"
        //                                 title="About Us"
        //                             />
        //                         </CardActionArea>
        //                     </Card>
        //                     <Carousel.Caption>
        //                         About Us
        //                     </Carousel.Caption>
        //                 </Carousel.Item>
        //             </Carousel>

        //             <Box m={5} />

        //             <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
        //                 <Grid item xs={12}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardContent>
        //                             Welcome to Online Flat Rental Application!

        // OFR is a disruptive real-estate platform that makes it possible to buy/sell/rent a house without paying any brokerage

        // OFR was started because all of us believed that paying hefty brokerage can not be the only option to find a new home. As tenants, we have been paying these brokerages year on year without seeing any advantage of the broker. The only reason he existed was that there was a huge information asymmetry in the market. OFR is a platform that removes this information asymmetry and provides a marketplace for free exchange of this information that used to cost 1-2 months of rent as brokerage.
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>
        //             </Grid>

        //             <Box m={5} />

        //             <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
        //                 <Grid item xs={3}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia
        //                                     component="img"
        //                                     alt="Couriers"
        //                                     height="200"
        //                                     image="https://i.pinimg.com/736x/6a/1f/be/6a1fbe5063e56e8c47eaa576d0ddd40e.jpg"
        //                                     title="Couriers"
        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Aayushi C
        //       <Typography variant="body2" color="textSecondary" component="p">
        //                                      Computer and Science Engineering , Vel Tech University
        //           </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>

        //                 <Grid item xs={9}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia

        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //       <Typography variant="body2" color="textSecondary" component="p">

        //                                 </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>
        //             </Grid>
        //             <Box m={3} />
        //             <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
        //                 <Grid item xs={3}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia
        //                                     component="img"
        //                                     alt="Couriers"
        //                                     height="200"
        //                                     image="https://i.pinimg.com/originals/a7/91/5e/a7915ea590195829ed7e09160b4f4e45.jpg"
        //                                     title="Couriers"
        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Sai Madhu Bhavana Alla
        //       <Typography variant="body2" color="textSecondary" component="p">
        //                                      Computer and Science Engineering , Vel Tech University
        //           </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>

        //                 <Grid item xs={9}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia

        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //       <Typography variant="body2" color="textSecondary" component="p">

        //                                 </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>
        //             </Grid>
        //             <Box m={3} />
        //             <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
        //                 <Grid item xs={3}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia
        //                                     component="img"
        //                                     alt="Couriers"
        //                                     height="200"
        //                                     image="https://pm1.narvii.com/7050/6824c090fe96496d7ccb2b9cff91d701cba98accr1-1080-1080v2_hq.jpg"
        //                                     title="Couriers"
        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Jishna K
        //       <Typography variant="body2" color="textSecondary" component="p">
        //                                     Electronics and Communication Engineering, Vel Tech Multi tech Engineering College
        //           </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>

        //                 <Grid item xs={9}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia

        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //       <Typography variant="body2" color="textSecondary" component="p">

        //                                 </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>
        //             </Grid>
        //             <Box m={3} />
        //             <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
        //                 <Grid item xs={3}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia
        //                                     component="img"
        //                                     alt="Couriers"
        //                                     height="200"
        //                                     image="https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png"
        //                                     title="Couriers"
        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Theepak Prakash 
        //       <Typography variant="body2" color="textSecondary" component="p">
        //                                     Computer and Science Engineering, Vel Tech Multi tech Engineering College
        //           </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>

        //                 <Grid item xs={9}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia

        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //       <Typography variant="body2" color="textSecondary" component="p">

        //                                 </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>
        //             </Grid>
        //             <Box m={3} />
        //             <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
        //                 <Grid item xs={3}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia
        //                                     component="img"
        //                                     alt="Couriers"
        //                                     height="200"
        //                                     image="https://pickaface.net/gallery/avatar/20160221_130710_2010_coolboy.png"
        //                                     title="Couriers"
        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Syed Samsudeen A
        //       <Typography variant="body2" color="textSecondary" component="p">
        //                                     Electrical and Electronics Engineering, Vel Tech Multi Tech Engineering College
        //           </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>

        //                 <Grid item xs={9}>
        //                     <Paper className={classes.paper}>
        //                         <Card className={classes.root}>
        //                             <CardActionArea>
        //                                 <CardMedia

        //                                 />
        //                             </CardActionArea>
        //                             <CardContent>
        //                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        //       <Typography variant="body2" color="textSecondary" component="p">

        //                                 </Typography>
        //                             </CardContent>
        //                         </Card>
        //                     </Paper>
        //                 </Grid>
        //             </Grid>
        //             <Box m={3} />
        //             <Box m={10} />
        //             <Footer />
        //         </div>

    );

}