import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { useHistory } from 'react-router-dom';

const ContactUs = (props) => {
    const history = useHistory();
    return (
        <div>
            <Header />
            <div className="container">
                <div className="py-4">
                    <h1 className="display-4 text-info">Contact on {props.mno}</h1>
                    <br />
                    <br />
                    <form class="col-md-4" onSubmit={() => history.push("/homepage")}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <br />
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <br /><br /><br />
            <br /><br /><br />
            <Footer />
        </div>
    )
}
export default ContactUs;