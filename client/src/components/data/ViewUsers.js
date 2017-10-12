import React from 'react';
import axios from 'axios';
import Helper from '../utilities/Helper';
import TableRow from './TableRow';

export default class ViewUsers extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { value: '', users: '' };
        this.addHelper = new Helper();
    }

    componentDidMount() {
        axios.get('http://localhost:3000/users')

        .then(response => {
            console.log(response.data);
            // this.setState({ users: response.userData });
        })

        .catch(function(error) {
            console.log(error);
        })
    }

    tabRow() {
        if (this.state.user instanceof Array) {
            return this.state.users.map(function(object, i) {
                return <TableRow obj={ object } key={ i } />;
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
                            <td> User </ td>
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