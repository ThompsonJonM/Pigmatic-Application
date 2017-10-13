import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
// import UserForm from './components/forms/UserForm';
// import ViewUsers from './components/data/ViewUsers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,

    document.getElementById('root')
);

registerServiceWorker();
