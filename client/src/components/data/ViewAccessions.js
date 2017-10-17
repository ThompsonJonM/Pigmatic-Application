import React from 'react';
import axios from 'axios';
import Helper from '../utilities/Helper';
import AccessionTableRow from './AccessionTableRow';

export default class ViewAccessions extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { value: '', accessions: '' };
        this.addHelper = new Helper();
    }

    componentDidMount() {
        axios.get('http://localhost:3000/users')

        .then(response => {
            console.log(response.data);
            console.log(this.state.accessions);
            this.setState({ users: response.data });
        })

        .catch(function(error) {
            console.log(error);
        })
    }

    tabRow() {
        if (this.state.users instanceof Array) {
            return this.state.users.map(function(object, i) {
                return <AccessionTableRow obj={ object } key={ i } />;
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 ml-auto mr-auto'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <td> User ID </ td>
                                    <td> Collection ID </ td>
                                    <td> Accession </ td>
                                </ tr>
                                
                            </ thead>

                            <tbody>
                                { this.tabRow() }
                            </ tbody>
                        </ table>
                    </ div>
                </ div>
            </ div>
        );
    }
}