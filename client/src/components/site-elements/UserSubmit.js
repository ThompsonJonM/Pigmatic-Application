import React from 'react';
import { Link } from 'react-router-dom';
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

export default class UserSubmit extends React.Component {
    render() {
        return (
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-8 ml-auto mr-auto'>
                        <br />
                        <br />
                        <h2> User Submitted </ h2>
                        <br />
                        <br />
                        <h3><Link style={styles.base} to='/view-users'> View Users </Link></ h3>
                    </ div>
                </ div>
            </ div>
        );
    }
}