import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Radium from 'radium';
import color from 'color';

const styles = {
    base: {
        color: '#000000',
        ':hover': {
            color: '#000000'
        }
    }
};

export default class Footer extends React.Component {
    render() {
        return (
            <div className='col-8 ml-auto mr-auto' id='footer'>
                <div className='row text-center' id='footerRow'>
                    <div className='col-12'>
                        <Router>
                            <h5><Link style={styles.base} to='https://thompsonjonm.github.io/' target='_blank'> © 2017 Jonathan Thompson </Link></ h5>
                        </ Router>
                    </ div>
                </ div>
            </ div>
        );
    }
}