import React from "react";


export default class EmployeeLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",

        }
    }

    handleNameChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ ...this.state, [nam]: val });
    }

    handlePasswordChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ ...this.state, [nam]: val });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        store().dispatch(login(this.state));
        // console.log(user);
        // setTimeout(this.checkLogin,1000);
    }

    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <div className="font-weight-bold">
                            <h2 className="text-center mb-4">LOGIN</h2>
                        </div>
                        <form>
                            <div className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    placeholder="Enter User Name"
                                    name="userName"
                                    type="text"
                                    min={1}
                                    onChange={event => this.handleNameChange(event)} />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    placeholder="Enter Password"
                                    name="password"
                                    type="password"
                                    onChange={event => this.handlePasswordChange(event)} />
                            </div>
                            <div>
                                <div className="row">
                                    <div className="input-field col s12 signup-btn">
                                        <button className="btn btn-primary btn-block" type="submit" onClick={event => this.handleSubmit(event)}>
                                            Login
                    </button>
                                        <p>{this.props.message}</p>

                                    </div>
                                </div>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
            </div>

        );
    };
}