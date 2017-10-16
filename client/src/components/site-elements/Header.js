import React from 'react'

import '../../assets/stylesheets/header.css'
import header from '../../assets/images/header.jpg'

export default class Header extends React.Component {
   
    render() {
        return (
            <div className='col-8 ml-auto mr-auto' id='header'>
                <img src={header} id='headerImage' alt={'headerImage'} />
            </ div>
        );
    }
}