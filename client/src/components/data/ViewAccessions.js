import React from 'react';
import axios from 'axios';
import Helper from '../utilities/Helper';
import AccessionTableRow from './AccessionTableRow';

export default class ViewAccessions extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { value: '', collections: '' };
        this.addHelper = new Helper();
    }

    componentDidMount() {
        axios.get('http://localhost:3000/collections')

        .then(response => {
            console.log(response.data);
            console.log(this.state.collections);
            this.setState({ collections: response.data });
        })

        .catch(function(error) {
            console.log(error);
        })
    }

    tabRow() {
        if (this.state.collections instanceof Array) {
            return this.state.collections.map(function(object, i) {
                return <AccessionTableRow obj={ object } key={ i } />;
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 ml-auto mr-auto'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <td className='text-center'> Accession No. </ td>
                                    <td className='text-center'> Method </ td>
                                    <td> Name </ td>
                                    <td> Collection </ td>
                                    <td> Provenance </ td>
                                    <td> Donor </ td>
                                    <td> Description </ td>
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