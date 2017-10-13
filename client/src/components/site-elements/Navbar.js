import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

// Style
import '../../stylesheets/navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='col-12' id='navbar'>
                <div className='row text-center'>
                    <div className='nav navbar-default' role='navigation'>
                        <ul className='nav navbar-nav' id='navList'>
                            <Router>
                                <div>
                                    
                                </ div>
                            </ Router>
                        </ ul>
                    </ div>
                </ div>
            </ div>
        );
    }
}
