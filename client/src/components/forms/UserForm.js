import React from 'react';
import Helper from '../utilities/Helper';

export default class UserForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            username: '',
            password: ''

        };

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
        // alert(this.state.username + this.state.password);
        event.preventDefault();

        let userData = {
            username: this.state.username,
            password: this.state.password
        }

        this.addHelper.sendData(userData);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type='text' name='username' onChange={this.handleChange} className='form-control'/>
                    </ label>

                    <label>
                        Password:
                        <input type='text' name='password' onChange={this.handleChange} className='form-control'/>
                    </ label>

                    <br />

                    <input type='submit' value='submit' className='btn btn-primary' />
                </ form>
            </ div>
        );
    }
}