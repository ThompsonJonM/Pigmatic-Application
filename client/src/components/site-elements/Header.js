import React from 'react'

import header from '../../assets/images/header.jpg'

export default class Header extends React.Component {
   
    render() {
        return (
            <div className='col-7 ml-auto mr-auto' id='header'>
                <img src={header} id='headerImage' alt={'headerImage'} />
            </ div>
        );
    }
}