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
        event.preventDefault();

        let userData = {
            username: this.state.username,
            password: this.state.password
        }

        this.addHelper.sendUserData(userData);
        this.props.history.push('/user-submit');
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <form className='col-10 ml-auto mr-auto' onSubmit={this.handleSubmit}>
                        <div className='row formRow'>
                            <div className='col-6 ml-auto mr-auto form-group'>
                                <label className='h5'> Username </ label>
                                <input className='form-control' value={this.state.username} onChange={this.handleChange} type='text' name='username' placeholder="Enter your institution's name." required />
                            </ div>

                            <div className='col-6 ml-auto mr-auto form-group'>
                                <label className='h5'> Password </ label>
                                <input className='form-control' value={this.state.password} onChange={this.handleChange} type='text' name='password' placeholder='Enter a password.' required />
                            </ div>

                            <input type='submit' value='submit' className='col-2 ml-auto mr-auto btn btn-dark' />
                        </ div>
                    </ form>
                </ div>
            </ div>
        );
    }
}