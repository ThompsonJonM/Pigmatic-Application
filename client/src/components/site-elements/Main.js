import React from 'react';

export default class Main extends React.Component {
    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='container text-center'>
                        <div className='col-12 ml-auto mr-auto'>
                            <h3> What is Pigmatic? </ h3>
                        </ div>
                    </ div>
                </ div>

                <br />
                <br />

                <div className='row'>
                    <div className='col-10 ml-auto mr-auto'>
                        <p>
                            <b>
                                Pigmatic is a museum collections database which seeks 
                                to simplify the process of accessioning items into an 
                                institution's collection. 
                            </b>
                        </p>

                        <p>
                            <b>
                                The application utilizes React and MongoDB to create
                                a user-friendly environment for museum staff. Records
                                employees simply create the collection along with an
                                ID for accessioning items. Once done, employees may 
                                access the collections under the "View Collections" tab
                                on the left-hand side of the webpage.
                                Accession items may be added by clicking a button next
                                to the collection's accession ID.
                            </b>
                        </p>

                        <p>
                            <b>
                                The current version of Pigmatic allows for both collection
                                and accession item creation. Images and condition reports
                                are future add-ons which have been planned for the first
                                revision of the application.
                            </b>
                        </p>
                    </ div>
                </ div>
            </ div>
        );
    }
}