import React from 'react'

import '../../stylesheets/header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className='col-8 ml-auto mr-auto' id='header'>
                <div className='row text-center' id='headerRow'>
                    <div className='col-12'>
                        <h1>PIGMATIC</ h1>
                    </ div>
                </ div>
            </ div>
        );
    }
}