import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

export default class Main extends React.Component {
    render() {
        return (
            <div className='container text-center'>
                <h3> Welcome to Pigmatic. Please sign in. </h3>

                <Router>
                    <div>
                        <Link to='/login'> Login </ Link>

                        <hr />

                        <Route path='/login' component={ LoginForm } />
                    </ div>
                </ Router>
            </ div>

        )
    }
}