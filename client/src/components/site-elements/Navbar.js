import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserForm from '../forms/UserForm';
import CollectionForm from '../forms/CollectionForm';
import AccessionForm from '../forms/AccessionForm';
import ViewUsers from '../data/ViewUsers';
import ViewCollections from '../data/ViewCollections';
import ViewAccessions from '../data/ViewAccessions';

// Style
import '../../assets/stylesheets/navbar.css'

const routes = [
    {
        path:'/add-user',
        main: () => {UserForm}
    },

    {
        path:'/add-collection',
        main: () => {CollectionForm}
    },

    {
        path:'/add-accession',
        main: () => {AccessionForm}
    },

    {
        path:'/view-users',
        main: () => {ViewUsers}
    },

    {
        path:'/view-collections',
        main: () => {ViewCollections}
    },

    {
        path:'/view-accessions',
        main: () => {ViewAccessions}
    }
]

export default class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className='nav navbar-nav' id='navList'>
                        <li><Link to='/add-user'> Add User</Link></li>
                        <li><Link to='/add-collection'> Add Collection</Link></li>
                        <li><Link to='/add-accession'> Add Accession</Link></li>
                        <li><Link to='/view-users'> View Users</Link></li>
                        <li><Link to='/view-collections'> View Collections</Link></li>
                        <li><Link to='/view-accessions'> View Accessions</Link></li>

                        <Route path='/add-user' component={ UserForm } />
                        <Route path='/add-collection' component={ CollectionForm } />
                        <Route path='/add-accession' component={ AccessionForm } />
                        <Route path='/view-users' component={ ViewUsers } />
                        <Route path='/view-collections' component={ ViewCollections } />
                        <Route path='/view-accessions' component={ ViewAccessions } />
                    </ ul>
                </ div>
            </ Router>
        );
    }
}
