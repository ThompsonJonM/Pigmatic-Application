import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Radium from 'radium';
import color from 'color';
import Main from '../site-elements/Main';
import CollectionForm from '../forms/CollectionForm';
import AccessionForm from '../forms/AccessionForm';
import ViewCollections from '../data/ViewCollections';
import ViewAccessions from '../data/ViewAccessions';
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
                        <li><Link style={styles.base} to='/add-collection'> Add Collection</Link></li>
                        <li><Link style={styles.base} to='/view-collections'> View Collections</Link></li>
                        <li><Link style={styles.base} to='/view-accessions'> View Accessions</Link></li>
                    </ ul>
                    <div className='col-10 ml-auto mr-auto' id='contentTray'>
                        <Route exact path='/' component={ Main } />
                        <Route path='/add-collection' component={ CollectionForm } />
                        <Route exact path='/add-accession' component={ AccessionForm } />
                        <Route exact path='/add-accession/:id' component={ AccessionForm } />
                        <Route path='/view-collections' component={ ViewCollections } />
                        <Route path='/view-accessions' component={ ViewAccessions } />
                        <Route path='/collection-submit' component={ CollectionSubmit } />
                    </ div>
                </ div>
            </ Router>
        );
    }
}
