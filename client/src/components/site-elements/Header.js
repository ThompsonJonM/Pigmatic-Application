import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import header from '../../assets/images/header.jpg'

export default class Header extends React.Component {
   
    render() {
        return (
            <div className='col-7 ml-auto mr-auto' id='header'>
                <Router>
                    <Link to='/'><img src={header} id='headerImage' alt={'headerImage'} /></ Link>
                </ Router>
            </ div>
        );
    }
}