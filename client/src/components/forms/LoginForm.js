import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helper from '../utilities/Helper';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.addHelper = new Helper();
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const { name, value } = event.target;
        
                this.setState({
                    [name]: value
                });

    }

    handleSubmit(event) {
        event.preventDefault();

        let loginData = {
            username: this.state.username,
            password: this.state.password
        };

        this.addHelper.sendLogin(loginData);
        this.props.history.push('/view-users');

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <form onSubmit={this.handleSubmit} className='col-12'>
                        <label>
                            Username:
                            <input type='text' name='username' onChange={this.handleChange} className='form-control'/>
                        </ label>

                        <label>
                            Password:
                            <input type='text' name='password' onChange={this.handleChange} className='form-control'/>
                        </ label>

                        <br />

                        <input type='submit' value='submit' className='col-2 btn btn-primary' />

                        
                    </ form>
                </ div>
            </ div>
        );
    }
}