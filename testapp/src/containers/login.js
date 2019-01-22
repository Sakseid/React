import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.lenght > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.prevetnDefault();
    }

    render() {
        return(
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                    
                    </FormGroup>
                </form>
            </div>
        )
    }
}