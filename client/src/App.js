import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from './components/forms/UserForm';
import ViewUsers from './components/data/ViewUsers';
import Header from './components/site-elements/Header';
import Footer from './components/site-elements/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />

        <Router>
          <div>
              <Route path='/add-new-user' component={ UserForm } />
              <Route path='/view-users' component={ ViewUsers } />
          </ div>
        </ Router>

        <Footer />
      </ div>
    );
  }
}
