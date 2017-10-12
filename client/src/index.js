import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import UserForm from './components/forms/UserForm';
import ViewUsers from './components/data/ViewUsers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className='container'>
            <Route exact path='/' component={ App } />
            <Route path='/add-new-user' component={ UserForm } />
            <Route path='/view-users' component={ ViewUsers } />
        </ div>
    </ Router>,

    document.getElementById('root')
);

registerServiceWorker();
