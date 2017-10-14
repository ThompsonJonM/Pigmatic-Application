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
        axios.get('http://localhost:3000/accessions')

        .then(response => {
            console.log(response.data);
            console.log(this.state.users);
            this.setState({ accessions: response.data });
        })

        .catch(function(error) {
            console.log(error);
        })
    }

    tabRow() {
        if (this.state.accessions instanceof Array) {
            return this.state.accessions.map(function(object, i) {
                return <AccessionTableRow obj={ object } key={ i } />;
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td> No. </ td>
                            <td> Accession </ td>
                        </ tr>
                    </ thead>

                    <tbody>
                        { this.tabRow() }
                    </ tbody>
                </ table>
            </ div>
        );
    }
}