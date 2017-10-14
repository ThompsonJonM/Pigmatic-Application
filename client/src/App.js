import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/site-elements/Main';
import UserForm from './components/forms/UserForm';
import CollectionForm from './components/forms/CollectionForm';
import AccessionForm from './components/forms/AccessionForm';
import ViewUsers from './components/data/ViewUsers';
import ViewCollections from './components/data/ViewCollections';
import ViewAccessions from './components/data/ViewAccessions';
import Header from './components/site-elements/Header';
import Footer from './components/site-elements/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />

        <Router>
          <div>
              <Route path='/' component={ Main } />
              <Route path='/add-user' component={ UserForm } />
              <Route path='/add-collection' component={ CollectionForm } />
              <Route path='/add-accession' component={ AccessionForm } />
              <Route path='/view-users' component={ ViewUsers } />
              <Route path='/view-collections' component={ ViewCollections } />
              <Route path='/view-accessions' component={ ViewAccessions } />
          </ div>
        </ Router>

        <Footer />
      </ div>
    );
  }
}
