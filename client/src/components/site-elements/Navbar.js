import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Radium from 'radium';
import color from 'color';
import Main from '../site-elements/Main';
import UserForm from '../forms/UserForm';
import CollectionForm from '../forms/CollectionForm';
import AccessionForm from '../forms/AccessionForm';
import ViewUsers from '../data/ViewUsers';
import ViewCollections from '../data/ViewCollections';
import ViewAccessions from '../data/ViewAccessions';
import UserSubmit from '../site-elements/UserSubmit';
import CollectionSubmit from '../site-elements/CollectionSubmit';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className='col-2 mr-auto nav navbar-nav' id='navList'>
                        <li><Link style={styles.base} to='/'> Home </ Link></ li>
                        <li><Link style={styles.base} to='/add-user'> Add User</Link></li>
                        <li><Link style={styles.base} to='/view-users'> View Users</Link></li>
                        {/* <li><Link style={styles.base} to='/add-collection'> Add Collection</Link></li>
                        <li><Link style={styles.base} to='/view-collections'> View Collections</Link></li> */}
                    </ ul>
                    <div className='col-10 ml-auto mr-auto' id='contentTray'>
                        <Route exact path='/' component={ Main } />
                        <Route path='/add-user' component={ UserForm } />
                        <Route exact path='/add-collection' component={ CollectionForm } />
                        <Route exact path='/add-collection/:id' component={ CollectionForm } />
                        <Route exact path='/collections/add-accession/:id' component={ AccessionForm } />
                        <Route path='/view-users' component={ ViewUsers } />
                        <Route path='/users/view-collections/:id' component={ ViewCollections } />
                        <Route exact path='/users/collections/view-accessions/:id' component={ ViewAccessions } />
                        <Route path='/user-submit' component={ UserSubmit } />
                        <Route path='/users/collection-submit' component={ CollectionSubmit } />
                    </ div>
                </ div>
            </ Router>
        );
    }
}
