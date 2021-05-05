import React from "react";
import {Link} from 'react-router-dom';
import store from "../../redux/store/ConfigureStore";
import './style.css' 

export default class Login extends React.Component{

    constructor(props){
        super(props);

        this.state={
            user:{
                UserName : "",
                password:""
            },
            error:""
          }
        }     

        
    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({user:{...this.state.user, [nam]:val}});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.user.userName+" hel");
        store().dispatch(login(this.state.user));
        console.log(User);
        setTimeout(this.checkLogin,1000);
        
    }

    checkLogin=()=>{
      if(User.getLoggedIn()){
          this.props.history.push('/');
      }
  }

    render() {
        return(
          <div className="banner">
          <div className="container">
          <div className="w-75 mx-auto shadow p-5">
          <div className="font-weight-bold">
          <h2 className="text-center mb-4">LOGIN</h2>
          </div>
              <form onSubmit={event=>this.handleSubmit(event)}>
              <div id="error">{this.state.error}</div>
              <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter your UserName"
                  name="userName"
                  type="text"
                  onChange={event=>this.handleChange(event)}/>
                  </div>
                  <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter your Password"
                  name="password"
                  type="text"
                  onChange={event=>this.handleChange(event)}/>
                  </div>
                    <div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <button className="btn btn-primary btn-block" type="submit">
                     Login
                    </button>
                    </div>
                    </div>
                   <h3 className="text-center">OR</h3>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <Link to="/sign-up">
                        <button type="button" className="btn btn-primary btn-block" onClick>SignUp</button>
                    </Link>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <Link to="/home">
                        <button className="btn btn-primary btn-block" type="button">Home</button>
                    </Link>   
                    </div>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
      );
    };
}