import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Radium from 'radium';
import color from 'color';
import UserForm from '../forms/UserForm';
import CollectionForm from '../forms/CollectionForm';
import AccessionForm from '../forms/AccessionForm';
import ViewUsers from '../data/ViewUsers';
import ViewCollections from '../data/ViewCollections';
import ViewAccessions from '../data/ViewAccessions';

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
                        <li id='linkText'><Link style={styles.base} to='/add-user'> Add User</Link></li>
                        <li id='linkText'><Link style={styles.base} to='/add-collection'> Add Collection</Link></li>
                        <li id='linkText'><Link style={styles.base} to='/add-accession'> Add Accession</Link></li>
                        <li id='linkText'><Link style={styles.base} to='/view-users'> View Users</Link></li>
                        <li id='linkText'><Link style={styles.base} to='/view-collections'> View Collections</Link></li>
                        <li id='linkText'><Link style={styles.base} to='/view-accessions'> View Accessions</Link></li>
                    </ ul>
                    <div className='col-12 ml-auto' id='contentTray'>
                        <Route path='/add-user' component={ UserForm } />
                        <Route path='/add-collection' component={ CollectionForm } />
                        <Route path='/add-accession' component={ AccessionForm } />
                        <Route path='/view-users' component={ ViewUsers } />
                        <Route path='/view-collections' component={ ViewCollections } />
                        <Route path='/view-accessions' component={ ViewAccessions } />
                    </ div>
                </ div>
            </ Router>
        );
    }
}
