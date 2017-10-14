import React from 'react';
import axios from 'axios';
import Helper from '../utilities/Helper';
import CollectionTableRow from './CollectionTableRow';

export default class ViewCollections extends React.Component {
    
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
                return <CollectionTableRow obj={ object } key={ i } />;
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
                            <td> Collection </ td>
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