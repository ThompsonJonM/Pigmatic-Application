import React from 'react'

import '../../assets/stylesheets/footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className='col-8 ml-auto mr-auto' id='footer'>
                <div className='row text-center' id='footerRow'>
                    <div className='col-12'>
                        <h5>Copyright 2017 Pigmatic</ h5>
                    </ div>
                </ div>
            </ div>
        );
    }
}